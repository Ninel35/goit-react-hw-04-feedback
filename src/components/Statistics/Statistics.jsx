

const Statistics = ({ good, neutral, bad, total, positiveFeedback, children }) => {
    return total !==0 ? (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positiveFeedback}</p>
        </div>
    ) : children
};
export default Statistics;