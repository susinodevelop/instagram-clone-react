export default interface UserNotification {
    id: number,
    user_id: number,
    action_type: string,
    action_user_id: number,
    related_entity_id: number,
    related_entity_type: string,
    content: string,
    created_at: string,
    read: boolean
}