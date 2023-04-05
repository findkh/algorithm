function solution(id_pw, db) {
    let [id, pw] = id_pw;
    let member = db.find(member => member[0] === id);

    if (!member) {
        return "fail";
    } else if (member[1] === pw) {
        return "login";
    } else {
        return "wrong pw";
    }
}