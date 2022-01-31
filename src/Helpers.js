const Helpers = () => {

    var staticData = {
        "tasks": [
          {
                "id": 1,
                "name": "Recruit candidates",
                "dueDate": "March 26, 2022",
                "priority": "High",
                "details": [{
                    "description": "Save time by attaching job descriptions to each positions card so that they can be accessed and updated by anyone on the team.mSearch for new employees by carefully crafting job descriptions to solicit applicants withe skills, experience and salary expectations your company requires",
                    "cost": "$200",
                    "assignee": "Emily"
    
                }]
            },
            {
                "id": 2,
                "name": "Performance Appraisals",
                "dueDate": "May 13, 2022",
                "priority": "Medium",
                "details": [{
                    "description": "Employees are tested to make sure that they will perform to the best of their ability in their new role.",
                    "cost": "$100",
                    "assignee": "Steve"
    
                }]
            },
            {
                "id": 3,
                "name": "Benefits Meetings",
                "dueDate": "June 10, 2022",
                "priority": "Low",
                "details": [{
                    "description": "Conduct meetings with new hires to explain company benefits such as health, disability and life insurance. The meeting gives the new workers an opportunity to review the various benefits available, which provides the necessary information for making an informed decision.",
                    "cost": "$0",
                    "assignee": "David"
    
                }]
            },
            {
                "id": 4,
                "name": "Update policies",
                "dueDate": "December 1, 2022",
                "priority": "Low",
                "details": [{
                    "description": "Policies need to be updated (or at least examined) every year as the organization changes",
                    "cost": "$0",
                    "assignee": "David"
    
                }]
            },
            {
                "id": 5,
                "name": "Handling Employee Concerns",
                "dueDate": "March 1, 2022",
                "priority": "High",
                "details": [{
                    "description": "When employees have problems with supervisors or other co-workers, they can arrange a meeting with HR department",
                    "cost": "$0",
                    "assignee": "David"
    
                }]
            },
    
            {
                "id": 6,
                "name": "Training and supporting managers",
                "dueDate": "April 5, 2022",
                "priority": "Medium",
                "details": [{
                    "description": "Provide management guidance to managers, making sure that department and teams are as healthy and functional as possible. This may include periodically sending managers to formal trainings and retreats",
                    "cost": "$0",
                    "assignee": "Alex"
    
                }]
            }
    
    
    
    
        ]
    }
    return staticData
}
export default Helpers ;