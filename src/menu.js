

function menuPageLoad () {
    const main = document.createElement('div');
    const header1 = document.createElement('h1');
    header1.innerText = 'Menu';
    const header2 = document.createElement('h2');
    header2.innerText = 'TRY OUR FOOD!';

    main.append(header1);
    main.append(header2);
    
    return main;
}

export default menuPageLoad;