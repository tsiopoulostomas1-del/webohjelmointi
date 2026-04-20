function handleClick(e) {
    e.preventDefault();

    const form = e.target.closest("form");

    let text = form.text.value;
    let email = form.email.value;
    let syntyma = form.syntyma.value;
    let tyyppi = form.tyyppi.value;
    let checkbox = form.checkbox.value;

    console.log(text);
    console.log(email);
    console.log(syntyma);
    console.log(tyyppi);
    console.log(checkbox);
}
