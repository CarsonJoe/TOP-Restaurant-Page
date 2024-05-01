

function aboutPageLoad () {
    const main = document.createElement('div');
    const header1 = document.createElement('h1');
    header1.innerText = 'About';
    const header2 = document.createElement('h2');
    header2.innerText = 'WE LOVE FOOD!';

    main.append(header1);
    main.append(header2);
    
    return main;
}

export default aboutPageLoad;