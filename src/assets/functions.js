export function canAccess(user, item) {
    let access = false;
    user.permissions?.forEach(el => {
        if (el.name === item || el.name === 'all')
            access = true
        return true;
    })
    return access
}

export function getDate(date) {
    let options = {day: 'numeric', month: 'short', year: 'numeric'}
    let d = new Date(date)
    return d.toLocaleString('ru', options)
}

export function download_file(file, name){
    const linkSource = file;
    const downloadLink = document.createElement("a");
    let ext = file.split('/')[1].split(';')[0]
    const fileName = name + "." + ext;
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
}