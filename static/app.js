const form = document.querySelector('.form');

form.addEventListener('submit',(event) => {
        event.preventDefault();

        const data = new FormData(form);
        let output = '';
        for (const entry of data){
            output = `${output}${entry[0]} = ${entry[1]}\r`;
        }
    log.innerText = output;
    },
    false
);
    

