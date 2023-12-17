import css from './FeedbackOption.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    
    return options.map((elem, idx) => (<button key={idx} className={css.option} type="button" name={elem} onClick={onLeaveFeedback}>{elem}</button>));
        
};

export default FeedbackOptions;