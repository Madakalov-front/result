import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';
import postcssFunctions from 'postcss-functions';
import postcssMixins from 'postcss-mixins';
import postcssSimpleVars from 'postcss-simple-vars';

const breakpoint = {
  mobile: 576,
  mobileXL: 640,
  tabletM: 743,
  tablet: 991,
  tabletXL: 1180,
  laptop: 1440,
  desktop: 1920,
};

export default {
  plugins: [
    postcssImport(),
    postcssSimpleVars(),
    postcssMixins({
      mixins: {
        response: (mixin, type, device, size = 'width') => {

          if (!device || !breakpoint.hasOwnProperty(device)) {
            return {};
          }

          const baseValue = breakpoint[device];
          const value = type === 'min' ? baseValue + 1 : baseValue;
          const mediaQuery = `@media (${type}-${size}: ${value}px)`;

          const rules = mixin.nodes.reduce((acc, node) => {
            acc[node.prop] = node.value;
            return acc;
          }, {});

          return {
            [mediaQuery]: rules
          };
        },
        'hover-effects': (mixin) => {
          const processNodes = (nodes) => {
            return nodes.reduce((rules, node) => {
              if (node.type === 'rule' || node.type === 'atrule') {
                rules[node.selector || node.name] = processNodes(node.nodes);
              } else if (node.type === 'decl') {
                rules[node.prop] = node.value;
              }
              return rules;
            }, {});
          };

          const styles = processNodes(mixin.nodes);

          return {
            '@media (hover: hover)': {
              '&:hover': styles,
            },
            '@media (hover: none)': {
              '&:active': styles
            }
          }
        }
      }
    }),
    postcssNested(),
    postcssFunctions({
      functions: {
        toRem: (px) => `${px / 16}rem`,
        toEm: (px, base = 16) => `${px / base}em`,
        toRgba: (hex, opacity) => {
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          return `rgba(${r}, ${g}, ${b}, ${opacity})`;
        }
      }
    }),
    postcssPresetEnv(),
    autoprefixer(),
    cssnano(),
  ]
};
