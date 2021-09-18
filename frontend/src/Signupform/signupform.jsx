import React from 'react'; 
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';

const signupform= (props) => {
    return (
        <div>
            <Form>
            <FormGroup>
                <Label for="Name">Name</Label>
                <Input type="text" name="Name" id="Name" placeholder="with a placeholder" />
            </FormGroup>
            
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            
            {/* <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup> */}

            <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="select" id="exampleSelect">
                <option>Aadhar</option>
                <option>Passport</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="Aadhar">Aadhar</Label>
                <Input type="text" name="Aadhar"/>
            </FormGroup>
            
            <FormGroup>
            <Label for="exampleAddress2">Address 2</Label>
            <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
        </FormGroup>
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
            </Col>
            <Col md={4}>
            <FormGroup>
                <Label for="exampleState">State</Label>
                <Input type="text" name="state" id="exampleState"/>
            </FormGroup>
            </Col>
            <Col md={2}>
            <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip"/>
            </FormGroup>  
            </Col>
        </Row>


        <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input type="select" name="select" id="exampleSelect">
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
            </Input>
        </FormGroup>

        <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input type="select" name="select" id="exampleSelect">
            <option>CSE</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </Input>
        </FormGroup>
        
        <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" accept=".jpeg"/>
        </FormGroup>

        <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input type="file" name="Document" id="exampleFile" accept=".pdf"/>
        </FormGroup>

        
        <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="Category" id="exampleSelect">
                <option>General</option>
                <option>OBC</option>
                <option>OBC</option>
                </Input>
        </FormGroup>


        <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="PWD" id="exampleSelect">
                <option>Yes</option>
                <option>No</option>
                </Input>
        </FormGroup>
            

        <Button>Submit</Button>


        </Form>
      </div>
    );
}
