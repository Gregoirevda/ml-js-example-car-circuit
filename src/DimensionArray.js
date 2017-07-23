import React from 'react';

const DimensionArray = ({arr}) => <div>
  {
    arr.map(row =>
      row.map(i =>
        i.toString()
      ).concat(<br />)
    )
  }
</div>;

export default DimensionArray;