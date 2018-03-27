import React, {Component} from "react";
import {observer} from "mobx-react";
import {Header, Item, Form, Button} from "semantic-ui-react";

@observer
class MUserProfile extends Component {
  componentDidMount() {
    this
      .props
      .store
      .fetchUserProfile()
  }

  render() {
    const userProfile = this.props.store.userProfile;
    const user = userProfile.user;
    const org = userProfile.org;
    return (
      <div>
        <Header as="h2">User Profile</Header>
        <Item.Group>
          <Item>
            <Item.Image
              size="small"
              src="https://dummyimage.com/200x200/6e6e6e/ffffff"
              circular/>
            <Item.Content>
              <Item.Header>
                {user.first_name} {user.last_name}
              </Item.Header>
              <Item.Meta>
                Organization: {org.org_name}
              </Item.Meta>
              <Item.Description>
                Contact No: {userProfile.contact_no}
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
        <Form>
          <Form.Group widths="equal">
            <Form.Field fluid="true">
              <label>First Name</label>
              <input
                value={user.first_name}
                type="text"
                onChange={(e) => user.first_name = e.target.value}/>
            </Form.Field>
            <Form.Field fluid="true">
              <label>Last Name</label>
              <input
                value={user.last_name}
                type="text"
                onChange={(e) => user.last_name = e.target.value}/>
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Username</label>
            <input placeholder="Username" value={user.username} disabled/>
          </Form.Field>
          <Form.Field>
            <Form.Input label="Password" type="password" placeholder="Password"/>
          </Form.Field>
          <Form.Field>
            <Form.Input
              label="Email"
              placeholder="joe@example.com"
              type="email"
              value={user.email}
              onChange={(e) => user.email = e.target.value}/>
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default MUserProfile;