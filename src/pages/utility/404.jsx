import SpacielPage from "../../components/extraPages/ExtraPage"
const NotFound = () => {
  return (
    <>
      <SpacielPage
        goTo={"Home"}
        header="404"
        code={'Oops! Page Not Found'}
        info={"The page you're looking for doesn't exist"}
  
    />
    </>
  )
}

export default NotFound