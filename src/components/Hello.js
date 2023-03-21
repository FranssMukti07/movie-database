const Hello = (props) => {
    const { nama, jurusan } = props;
    return (
        <div>
            <h2>Hello World!</h2>
            <p>I'm {nama} - {jurusan}</p>
        </div>
    );
};

export default Hello;