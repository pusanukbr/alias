import React from 'react';
import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaUserPlus, FaLink } from 'react-icons/fa';
import { connect } from 'react-redux';

function ListMenu() {
  return (
    <>
      <List mt="20px" textAlign="center">
        <ListItem>
          <ListIcon as={FaUserPlus} color="teal.300" />
          Id number 1
        </ListItem>
        <ListItem>
          <ListIcon as={FaLink} color="teal.300" />
          Id number 2
        </ListItem>
      </List>
    </>
  );
}

export default connect(
  ({ user }) => ({
    user
  }),
  (dispatch) => ({ dispatch })
)(ListMenu);
