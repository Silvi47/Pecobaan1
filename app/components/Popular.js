import React from "react";

function LanguageNav ({ selected, onUpdateLanguage }) {
    const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"]

    return (
        <ul className="flex-center">
            {languages.map((language) => (
                <li key={language}>
                    <button className="btn-clear nav-link" 
                        style={language === selected ? { color: 'rgb(187, 46, 31' } : null}
                        onClick={() => onUpdateLanguage(language)}>
                        {language}
                    </button>
                </li>
            ))}
        </ul>
    )
}

class Popular extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedLanguage: 'All'
        }

        this.updateLanguage = this.updateLanguage.bind(this)
    }
    updateLanguage (selectedLanguage) {
        this.setState({
            selectedLanguage
        })
    }
    
    render() {
        const { selectedLanguage } = this.state

        return (
            <React.Fragment>
                <LanguageNav
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateLanguage}
                />
            </React.Fragment>
        )
        
        /*const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"]

        return (
            <ul className="flex-center">
                {languages.map((language) => (
                    <li key={language}>
                        <button className="btn-clear nav-link"
                            style={language === this.state.selectedLanguage ? { color: 'rgb(187, 46, 31' } : null}
                            onClick={() => this.updateLanguage(language)}>
                            {language}
                        </button>
                    </li>
                ))}
            </ul>
        )*/
    }
}

export default Popular;
