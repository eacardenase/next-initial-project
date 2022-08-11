const DarkLayout = ({ children }) => {
    return (
        <div
            style={{
                backgroundColor: 'rgba(224, 226, 240, 0.8)',
                padding: '10px',
                borderRadius: '5px',
            }}
        >
            <h3>Dark-Layout</h3>
            <div>{children}</div>
        </div>
    );
};

export default DarkLayout;
