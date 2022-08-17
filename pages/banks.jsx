

import { useEffect, useState } from 'react';
import TableSelect from '../components/TableSelect'
import requests from '../agent';
const page = "/Banks/";
import ContentPage from '../components/ContentPage';

const columns = ['id', 'bankCode', 'bankName', 'countryId', 'contactDetails', 'postalAddress', 'physicalAddress', 'remarks'];

const Bank = () => {
    const [data, setData] = useState([]);
    // const [inputs, setInputs] = useState({});
    useEffect(() => {
        requests.get(page).then(response => {
            setData(response);
            console.log("loaded")
        })
       
    }, []);

    const handleSave = (e) => {
        // requests.post(page, Object.values(inputs)[0]);
    }
    const handleDelete = (e) => {
        // requests.del(page + e.id);
    }
    const handleUpdate = (e) => {
        // requests.put(page + e.id, e);
    }

    return (
        <ContentPage >
            <TableSelect columns={columns} dataSource={data}
                title="Bank"
                handlesave={handleSave}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                width={800}
                height={550} >
                {/* <Form colCount={2}>
                    <Item >
                        <TextBox onValueChanged={(e) => {
                            setInputs(prevState => ({ inputs: { ...prevState.inputs, bankCode: e.value } }))
                        }} />
                        <RequiredRule />
                        <Label text="Bank Code" />
                    </Item>
                    <Item >
                        <TextBox onValueChanged={(e) => {
                            setInputs(prevState => ({ inputs: { ...prevState.inputs, bankName: e.value } }))
                        }} />
                        <RequiredRule />
                        <Label text="Bank Name" />
                    </Item>
                    <Item >
                        <SelectBox dataSource={Countries} valueExpr="id" displayExpr="countryName" onValueChanged={(e) => {
                            setInputs(prevState => ({ inputs: { ...prevState.inputs, countryId: e.value } }))
                        }} />
                        <RequiredRule />
                        <Label text="Country" />
                    </Item>
                    <Item >
                        <TextBox onValueChanged={(e) => {
                            setInputs(prevState => ({ inputs: { ...prevState.inputs, contactDetails: e.value } }))
                        }} />
                        <RequiredRule />
                        <Label text="Contact Details" />
                    </Item>
                    <Item >
                        <TextBox onValueChanged={(e) => {
                            setInputs(prevState => ({ inputs: { ...prevState.inputs, postalAddress: e.value } }))
                        }} />
                        <RequiredRule />
                        <Label text="Postal Address" />
                    </Item>
                    <Item >
                        <TextBox onValueChanged={(e) => {
                            setInputs(prevState => ({ inputs: { ...prevState.inputs, physicalAddress: e.value } }))
                        }} />
                        <RequiredRule />
                        <Label text="Physical Address" />
                    </Item>
                    <Item >
                        <TextBox onValueChanged={(e) => {
                            setInputs(prevState => ({ inputs: { ...prevState.inputs, remarks: e.value } }))
                        }} />
                        <Label text="Remarks" />
                    </Item>

                </Form> */}
            </TableSelect>

        </ContentPage>
    );
}

export default Bank;

