


export default function Hello(props) {
    console.log(props);
    return <div>Hello, {props.name}</div>;
  }



export async function GetServerSideProps(){
    return{
        props: {
            name: 'samson',
        }
    }
}