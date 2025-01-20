
const checkOnlineUsers = () => {
    const filterOnlineUsers = (users) => {
        return users.filter(obj => obj.status === 'online');
    }

    const printOnlineUsers = (users) => {
        for (const user of users) alert(`Сейчас в онлайн следующие пользователи: ${user.username}`)
    }

    const filteredUsers = filterOnlineUsers([
        {
            username: 'David',
            status: 'online',
            lastActivity: 10
        },
        {
            username: 'Lucy',
            status: 'offline',
            lastActivity: 22
        },
        {
            username: 'Bob',
            status: 'online',
            lastActivity: 104
        }
    ]);

    printOnlineUsers(filteredUsers)
}

const giveTalonsInOrder = (patients, orders) => {
    const filteredPatients = []
    for (let i = 0, j = 0, len = orders.length; i < len;) {
        if (orders[i] === patients[j].id) {
            filteredPatients.push(patients[j]);
            i++
            j = 0;
        } else {
            j++
            continue;
        }
    }
    return filteredPatients;
}
// console.log(giveTalonsInOrder([
//     { id: 1, name: "Максим" },
//     { id: 2, name: "Николай" },
//     { id: 3, name: "Ангелина" },
//     { id: 4, name: "Виталий" },
// ], [4, 2, 1, 3]))

const handleObject = (obj, key, action) => {
    const actionsParametr = ['get', 'add', 'delete'];
    if (!actionsParametr.includes(action)) return obj;

    const actionObj = {
        get(key) {
            return obj[key]
        },
        add(key) {
            obj[key] = '';
            return obj;
        },
        delete(key) {
            delete obj[key];
            return obj;
        }
    }
    return actionObj[action](key) ?? 'Такого ключа нет'
}

// console.log(handleObject({
//     name: 'Maxim',
//     programmingLanguage: 'JavaScript',
// }, 'bobs', 'add'))

const giveJobToStudent = (student, jobName) => {
    alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`)
    return { ...student, job: jobName }
}

const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}
// console.log(giveJobToStudent(student, 'веб-разработчик'));

function sum() {
    console.log(arguments)
    return [...arguments].reduce((sum, b) => sum += b)
}
// console.log(sum(1, 2, 3)) // 6
// console.log(sum(2, 2)) // 4
// console.log(sum(10, 15, 249, 653, 846)) // 1773