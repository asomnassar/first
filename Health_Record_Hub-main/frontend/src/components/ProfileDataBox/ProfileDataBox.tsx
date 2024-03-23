import { Paper } from "@mui/material"
import { handleDate } from "../../functions/handleDate"
import { ProfileTypes } from "../../types/store.types"
import DataBox from "./DataBox"

const ProfileDataBox = ({data}:{data:ProfileTypes}) => {
  return (
    <Paper className={`grid grid-cols-2 justify-stretch items-center gap-4 rounded-lg p-4`} elevation={0}>
      <DataBox title={"الاسم الاول : "}  value={data.firstName} />
      <DataBox title={"الاسم الاخير : "}  value={data.lastName} />
      <DataBox title={"البريد الالكنرونى : "}  value={data.email} />
      <DataBox title={"رقم الهاتف : "}  value={data.phone} />
      <DataBox title={"الجنس : "}  value={data.gender} />
      <DataBox title={"العنوان : "}  value={data.address} />
      <DataBox title={"تاريخ الميلاد : "}  value={handleDate(data.dateOfBirth)} />
      <DataBox title={"العمر : "}  value={data.age} />
    </Paper>
  )
}

export default ProfileDataBox