'use client'

interface Props {
    error : Error
    
}

const ErrorPage = ({error}: Props) => {
    console.log('This error has occured ___________', error);
    
  return (
    <div>An unexpected error has occured</div>
  )
}

export default ErrorPage