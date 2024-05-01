import SpacielPage from '../../components/extraPages/ExtraPage'
//add line breake in info
const Error = () => {
  return (
    <div>
        <SpacielPage
        header="Error"
        code='Some Unknown Error Occured'
        info={"This may not mean anything. \n \nI'm probably working on something that has blown up"}/>
    </div>
  )
}

export default Error