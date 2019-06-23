const Schema = (types = {}) => (values = {}) => {

    checkValidateProperties(types, values)
    checkValidateValues(types, values)

    return values

    function checkValidateProperties(validateTypes, validateValues) {

        for(let key in validateTypes) {

            if(validateTypes[key].constructor === Object) {

                checkValidateProperties(validateTypes[key], validateValues[key])

            } else {

                if(!validateValues.hasOwnProperty(key)) {

                    throw new 'Schema property not found'

                }

            }

        }

    }

    function checkValidateValues(validateTypes, validateValues) {

        for(let key in validateTypes) {

            if(validateTypes[key].constructor === Object) {

                if(!Object.keys(validateTypes[key]).length) {

                    throw new 'Schema object is empty'

                }

                checkValidateValues(validateTypes[key], validateValues[key])

            } else {
                
                if(validateTypes[key]().constructor !== validateValues[key].constructor) {

                    throw new 'Schema type not equal'

                }

            }

        }
        
    }

}