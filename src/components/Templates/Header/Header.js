import React from "react";
import './Header.css';
import logo from '../../../images/yuyuyu.svg';
import menu_svg from '../../../images/menu.svg';
import $ from 'jquery'
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { SearchProvider, Results, SearchBox } from "@elastic/react-search-ui";
import { Link } from 'react-router-dom'
import "@elastic/react-search-ui-views/lib/styles/styles.css";

const connector = new AppSearchAPIConnector({
    searchKey: "search-23x955yvgw1hmhnduquuq573",
    engineName: "yuyuyu-engine",
    endpointBase: "https://yuyuyu-deployment.ent.us-west1.gcp.cloud.es.io",
});

// Step #3: Configuration options
const configurationOptions = {
    alwaysSearchOnInitialLoad: false,
    hasA11yNotifications: false,
    apiConnector: connector,
    searchQuery: {
      search_fields: {
        // 1. Search by name of project.
        name: {},
        location: {},
        year: {}
      },
      // 2. Results: name, project_url, location, year.
      result_fields: {
        name: {
          // A snippet means that matching search terms will be wrapped in <em> tags.
          snippet: {
            size: 75, // Limit the snippet to 75 characters.
            fallback: true // Fallback to a "raw" result.
          }
        },
        project_test_url: {
          raw: {}
        },
        location: {
            // A snippet means that matching search terms will be wrapped in <em> tags.
            snippet: {
              size: 75, // Limit the snippet to 75 characters.
              fallback: true // Fallback to a "raw" result.
            }
        },
        year: {
            // A snippet means that matching search terms will be wrapped in <em> tags.
            snippet: {
                size: 75, // Limit the snippet to 75 characters.
                fallback: true // Fallback to a "raw" result.
            }
        },
      }
    }
};

export default class Header extends React.Component {
    componentDidMount(){    
        $(function () {

            // show hide subnav depending on scroll direction
            var position = $(window).scrollTop();
        
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
        
                if (scroll > position) {
        
                    //only piece that matters
                    $('nav')
                        .stop(true, false)
                        .removeClass('animateIn')
                        .addClass('animateOut');
                    // scrolling downwards, only here for dev purposes
                    // console.log('moving DOWN the page');
        
                } else {
                    //only piece that matters
                    $('nav')
                        .stop(true, false)
                        .removeClass('animateOut')
                        .addClass('animateIn');        
                    // scrolling upwards 
                    // console.log('moving UP the page');
                }
        
                position = scroll;
            });
        
        });
    }

    render() {
        const isRoot = this.props.isRoot;
        return (
            <SearchProvider config={configurationOptions}>
                <nav className="navbar">
                    {!isRoot && 
                    <div className="logo">
                        <a href="/#/home" replace><img src={logo} alt="Logo of Yuyuyu Design"/></a>
                    </div>
                    }
                    {isRoot && 
                        <div className="logo">
                            <img src={logo} alt="Logo of Yuyuyu Design"/>
                        </div>
                    }
                    <div className="menu">
                        <div className="disabled">Work</div>
                        <div className="disabled">About</div>
                        <div className="disabled">Contact</div>
                    </div> 
                    <div className="menu-svg">
                        <img src={menu_svg} alt="menu" />
                    </div>
                        {/* header={<SearchBox autocompleteSuggestions={true}/>} */}
                        <SearchBox
                            inputProps={{ placeholder: "placeholder" }}
                            // autocompleteResults={{
                            //     titleField: "name",
                            //     urlField: "project_url"
                            // }}
                            autocompleteSuggestions={{
                                sectionTitle: "Suggested Queries",
                            }}
                        />
                </nav>
                <Results titleField="name" urlField="project_test_url" />
            </SearchProvider>
        );
    }
}