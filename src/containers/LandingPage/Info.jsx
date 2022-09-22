import React from 'react';

const Info = () => {
  const list = [
    'Redux-toolkit',
    'React-Redux',
    'Axios',
    'RestAPI (theory and practice)',
    'Hooks (theory and practice)',
  ];
  return (
    <div>
      <p>Technologies that i currently used on this Project are : </p>

      {list.map((item, i) => (
        <p key={i}>
          {i + 1}. {item}
        </p>
      ))}
    </div>
  );
};

export default Info;
