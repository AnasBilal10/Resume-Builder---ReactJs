export const ResumeReducer = function (tasks, action) {
    switch (action.type) {
        case 'education:added': {
            return [...tasks, {id: action.id, }]
        }
            break;
    
        default:
            break;
    }
}