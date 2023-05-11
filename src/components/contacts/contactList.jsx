import PropTypes from 'prop-types';
import {
  List,
  Item,
  Button,
  Name,
  Number,
  SubContainer,
} from './contact.styled';

export const ContactList = ({ contact, onDeleteContact }) => {
  return (
    <div>
      <List>
        {contact.map(({ name, number, id }) => (
          <Item key={id}>
            <Name>{name}</Name>
            <SubContainer>
              <Number>{number}</Number>
              <Button onClick={() => onDeleteContact(id)}>╳</Button>
            </SubContainer>
          </Item>
        ))}
      </List>
    </div>
  );
};

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
