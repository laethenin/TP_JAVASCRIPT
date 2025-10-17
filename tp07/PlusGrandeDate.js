function plusGrandeDate (date1, date2) {
    let dateLaplusRecente ;
        if (date1 > date2) {
            dateLaplusRecente = date1;
        }

        else {
            dateLaplusRecente = date2;
        }
    return dateLaplusRecente;
}

let date1 = new Date (2021, 2, 11);
let date2 = new Date (2018, 5, 18);

let date = plusGrandeDate (date1, date2) ;

console.log ("La date la plus récente est " + date);