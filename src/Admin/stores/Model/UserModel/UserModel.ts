class UserModel {
    userId: number
    name: string
    department: string
    jobRole: string
    constructor(details) {
        this.userId =details.user_id
        this.name =details.name
        this.department =details.department
        this.jobRole =details.job_role
    }
}
export default UserModel