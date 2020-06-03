import axios from 'axios';

const url = 'http://www.mocky.io/v2/5ed738243200002b00274591';


export const  fetchEmployees = async  () => {
    return await axios.get(url)
}

export const  fetchEmployeesDetailsWithId = async  (id) => {
    return await axios.get(url)
                .then((res) => {
                    console.log(res);
                    let data = res.data['employees-list'];

                    for (let i = 0; i < data.length ; i ++) {
                        if (data[i].id == id)
                        {
                            return data[i];
                        }
                    }
                })

}

export const  fetchEmployeesResumeWithId = async  (id) => {
    return await axios.get(url)
                .then((res) => {
                    console.log(res);
                    let data = res.data['employees-list'];

                    for (let i = 0; i < data.length ; i ++) {
                        if (data[i].id == id)
                        {
                            return {"data": data[i].resume, name: data[i].firstName + ' ' + data[i].lastName};
                        }
                    }
                })

}
