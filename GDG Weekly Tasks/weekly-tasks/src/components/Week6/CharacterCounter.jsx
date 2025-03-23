import { useReducer, useEffect, useMemo, useCallback, useState } from 'react';

const useCharacterCount = (maxLength) => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'UPDATE_TEXT':
          const newText = action.payload.slice(0, maxLength);
          return { ...prevState, text: newText, count: newText.length };
        default:
          return prevState;
      }
    },
    { text: '', count: 0 }
  );

  const percentage = useMemo(
    () => (state.count / maxLength) * 100,
    [state.count, maxLength]
  );

  const updateText = useCallback(
    (text) => dispatch({ type: 'UPDATE_TEXT', payload: text }),
    []
  );

  return { ...state, percentage, updateText, maxLength };
};

const CharacterCounter = () => {
  const MAX_LENGTH = 200;
  const { text, count, percentage, updateText } = useCharacterCount(MAX_LENGTH);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Character Counter
      </h1>
      
      <textarea
        value={text}
        onChange={(e) => updateText(e.target.value)}
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        rows="5"
        placeholder="Start typing..."
      />
      
      <div className="mt-4 space-y-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-blue-600">
                {Math.round(percentage)}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: `${percentage}%` }}
              className="transition-all duration-300 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-gray-600">
            {count}/{MAX_LENGTH} characters
            {percentage >= 90 && (
              <span className="ml-2 text-yellow-600">(Warning: 90% reached!)</span>
            )}
          </div>
          
          <button
            onClick={handleCopy}
            className={`px-4 py-2 rounded-md transition-colors ${
              isCopied
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white focus:outline-none`}
          >
            {isCopied ? '✓ Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterCounter;