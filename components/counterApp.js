import * as React from'react';
import { connect } from 'react-redux'; //{connect} connects a React component with Redux store
import { View, Text, Button } from 'react-native';
import { increase,decrease } from '../redux/actions';

const mapStateToProps = state => ({counter:state.counter.value}) //Return a state value that points to store which points to reducers (counter)

/* const mapStateToProps = (...args)=>{
    console.log (args[0]); return state
    console.log (args[1]); return ownProps of the wrapper component
} */

const counterApp = ({counter,increase,decrease}) =>{
    const handleIncrease = ()=>{
        increase(5);
    }
    const handleDecrease = ()=>{
        decrease(5);
    }
    return (
        <View>
            <Text>Counter Value is "{counter}"</Text>
            <Button title='Increase' onPress={handleIncrease}/>
            <Button title='Decrease' onPress={handleDecrease}/>
        </View>
    );
};

/*  internally, React-Redux calls bindActionCreators
to bind the actions to the dispatch of your store by
"bindActionCreators(mapDispatchToProps, dispatch)"" */
const mapDispatchToProps = ({increase,decrease});


/*  call connect to generate the wrapper function, and immediately call
 the wrapper function to generate the final wrapper component. */
export default connect(mapStateToProps, mapDispatchToProps)(counterApp);