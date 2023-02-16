import PropTypes from 'prop-types' //npm install prop-types

export const FirstApp = ({title,subTitle = 'La tierra explota!'}) =>{

    return (
        <>
            <h1> {title}</h1>
            <p>{subTitle + 1}</p>
        </>
    );
}

FirstApp.propTypes = {
 title: PropTypes.string.isRequired,
 subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title:'No Hay titulo',
    subTitle:"No hay subtitulo"
}