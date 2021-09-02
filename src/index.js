console.log('Hello World');

// Funtion using fetch api
const dataFetchGET = async (request_param) => {
    return await fetch(request_param)
        .then((response) => {
            console.log(response)
            if (!response.ok) {
                throw new Error(`HTTP error - status: ${response.status}`)
            }
            // console.log(resp.json())
            return response;
        })
        .then((data) => data.json())
        .catch((err) => {
            console.log(err)
        })
}

const dataFetchPOST = async (request_param) => {
    return await fetch(request_param)
        .then((response) => {
            console.log(response)
            if (!response.ok) {
                throw new Error(`HTTP error - status: ${response.status}`)
            }
            return response;
        })
        .catch((err) => {
            console.log(err)
        })
}

const dataFetchES2017 = async (request_param) => {
    try {
        const response = await fetch(request_param);
        if (!response.ok) {
            throw new Error(`HTTP error - status: ${response.status}`)
        }

        if (request_param.method === 'GET') {
            const json = await response.json()
            return json;
        } else {
            const code = response;
            return code;
        } 
    } catch (error) {
        console.log(error)
    }
}




/* Analysis*/
const textAnalysis = (data) => {
    const data_return = data;
    let entry, title_upper, body_count;
    for (entry of data_return) {
        // Make title uppercase
        title_upper = entry.title.toUpperCase();
        entry.title = title_upper;

        // Turn body value into word count of input body
        body_count = entry.body.split(' ').length
        entry.body = body_count.toString()
    }
    // console.log(data_return)
    return data_return;
}




/****************************** Main ********************************/
const url = 'https://jsonplaceholder.typicode.com/posts';

const request_GET = new Request(url, {
    method: 'GET'
})
// console.log(request_GET)

// const output = await dataFetchGET(request_GET)
const output = await dataFetchES2017(request_GET)
// console.log(typeof output)

if (!output) {
    throw new Error('No Data Found')
} else {
    const analysis = textAnalysis(output)
    console.log(typeof analysis);
    console.log(analysis);

    const request_POST = new Request(url, {
        method: 'POST',
        body: JSON.stringify(analysis),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });

    // const post_output = await dataFetchPOST(request_POST);
    const post_output = await dataFetchES2017(request_POST);
    console.log(post_output)
}



