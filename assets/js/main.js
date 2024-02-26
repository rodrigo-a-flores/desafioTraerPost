const url = 'https://jsonplaceholder.typicode.com/posts';
let containerData = document.getElementById('container');
let error = document.getElementById('error');
let getPost = async () => {
    try{
        const response = await fetch(url);
        const data = await response.json();        
        let viewData = '';
        data.forEach(item => {
            viewData += `
            <li>
            <b>${item.title}</b><br>
            ${item.body}
            </li>
            `;
            containerData.innerHTML = viewData;
        });       
    }catch(e){
        error.innerHTML = 'Fatality Error (X)';
    }
}