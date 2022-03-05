import PropTypes from "prop-types";
import React from "react";
import { fetchPopularRepos } from "../utils/api";

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

LanguageNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired
}

class Popular extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedLanguage: 'All',
            repos: null,
            error: null
        }

        this.updateLanguage = this.updateLanguage.bind(this)
        this.isLoading = this.isLoading.bind(this)
    }
    
    componentDidMount () {
        this.updateLanguage(this.state.selectedLanguage)
    }
    updateLanguage (selectedLanguage) {
        this.setState({
            selectedLanguage,
            error: null,
            repos: null
        })
        
        fetchPopularRepos(selectedLanguage)
            .then((repos) => this.setState({
                repos,
                error: null,
            }))
            .catch(() => {
                console.warn('Error fetchung repos: ', error)

                this.setState({
                    error: 'There was an error fetchung the repositories.'
                })
            })
    }
    
    isLoading() {
        return this.state.repos === null && this.state.error === null
    }
    
    render() {
        const { selectedLanguage } = this.state

        return (
            <React.Fragment>
                <LanguageNav
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateLanguage}
                />
    
                {this.isLoading() && <p>LOADING</p>} 

                {error && <p>{error}</p>}

                {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
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
