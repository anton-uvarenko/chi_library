import React, {useState} from 'react';
import {Button, Input, Col, Row} from 'antd';

const Page: React.FC = () => {
    const [inputData, setInputData] = useState("");
    const handleClick = () => {
        console.log("clicked");
    }
    return (
        <>
            <Row>
                <Col><Button type="dashed" onClick={() => handleClick()}>button</Button></Col>
                <Col><Input
                    placeholder="some data idk"
                    value={inputData}
                    onChange={(e) => {
                        e.preventDefault();
                        setInputData(e.target.value);
                    }}></Input></Col>
            </Row>
        </>
    )
}

export default Page;