import AppLoader from "./AppLoader";

const withLoader = (WrappedComponent, entity) => {
    return(props) => {        
        return (
            <>
            {entity ? <AppLoader/> : <WrappedComponent {...props}/>}
            </>
        )
    }
}

export default withLoader;