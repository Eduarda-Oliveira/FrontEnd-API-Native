import React, { useState } from "react";
import KeywordService from "../services/keyword_service"
import Async from "react-select/async"
import { StyleSheet } from "react-native";

export default function KeywordMultipleSelect({value, onChange}) {

    const [options, setOptions] = useState([])
    const [selectValue, setSelectValue] = useState(value)

    function updateValue(newValue){
        let valueToUpdate = newValue;

        if(valueToUpdate !== null && valueToUpdate.length === 0){
            valueToUpdate = null;
        }

        setSelectValue(valueToUpdate);
        onChange(valueToUpdate);
    }

    function filterResponse(originalResponse, searchTerm){
        if(!searchTerm) {
            return originalResponse;
        }

        let filteredResults = []
        let searchTermNormalized = searchTerm.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]|- | -/g, "");

        originalResponse.data.forEach((element) => {
            let normalizedOptionName = element.name.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]|- | -/g, "");

            if(normalizedOptionName.match(searchTermNormalized)){
                filteredResults.push(element);
            }
        })

        return filteredResults;
    }

    function loadOptions(textInput) {
        return KeywordService.findAll().then((response) => {
            let filteredResponse = filterResponse(response, textInput);
            setOptions(filterResponse)

            return filteredResponse;
        })
    }

    function getOptionValue(option){
        return option.name
    }

    return <React.Fragment>
        <Async value={selectValue}
            isMulti={true}
            getOptionValue={getOptionValue}
            styles={styles.input}
            loadOptions={loadOptions}
            onChange={updateValue}
            isSearchable={true}
            />
    </React.Fragment>

}

const styles = StyleSheet.create({
  
    input: {
      position: 'relative',
      backgroundColor: '#ffffff',
      width: '90%',
      marginBottom: 15,
      color: 'black',
      fontSize: 17,
      borderRadius: 15,
      padding: 10,
    }
   
});
  