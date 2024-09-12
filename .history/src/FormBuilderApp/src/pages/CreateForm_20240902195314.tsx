import React from 'react'

const CreateForm : React.FC = () => {
  return (
    <Grid container spacing={3}>
  <Grid item xs>
    <Item>xs</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>xs=6</Item>
  </Grid>
  <Grid item xs>
    <Item>xs</Item>
  </Grid>
</Grid>
  )
}

export default CreateForm
