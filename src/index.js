

console.log('Hello World');
let url = 'https://jsonplaceholder.typicode.com/posts/1';


const second = async () => {
    let data = await fetch(url)
        .then((resp) => {
            console.log(resp)
            if (!resp.ok) {
                throw new Error(`HTTP error - status: ${resp.status}`)
            }
            // console.log(resp.json())
            return resp.json();
        })
        .catch((err) => {
            console.log(err)
        })
    
    return data;
}

const main = async () => {
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data)
}

let output = second()
console.log(output)
// main()