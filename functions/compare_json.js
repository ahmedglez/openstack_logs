const compare = (json, name) => {
    const fs = require('fs');
    const path = require('path');
    const fileName = name + '.json';
    const filePath = path.join('../jsons/', fileName);
    try {
        const file = fs.readFileSync(filePath, 'utf-8');
        const json_old = JSON.parse(file);
        const json_new = JSON.parse(json);
        const diff = json_new.filter(item => {
            return !json_old.some(item_old => {
                return item_old.id === item.id
            })
        })
        console.log(diff)
        fs.unlink(filePath, (err) => {
            if (err) throw err;
            console.log('successfully deleted ' + fileName);
        })

        fs.writeFile(filePath, diff, (err) => {
            if (err) {
                console.log('error:', err);
            } else {
                console.log('Json guarado correctamente!');
            }
        })
    } catch (error) {
        fs.writeFile(filePath, json, (err) => {
            if (err) {
                console.log('error:', err);
            } else {
                console.log('Json guarado correctamente!');
            }
        })
    }
}


module.exports = {
    compare
}