import React from 'react';
import ContactItem from './ContactItem';

function RecentChat(props) {
  return (
    <div>
      <ContactItem name="Winifred Wang" status="online" />
      <ContactItem name="Susan Jiang" status="away" />
    </div>
  );
}

export default RecentChat;
