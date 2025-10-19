
import axios from "axios";

export let landingPageResumeCount = () => (dispatch: any) => {

  return axios.post<any>('/apis/dashboard-count').then((res) => {
    // console.log(res);
    dispatch({
      type: 'LANDING_RESUME_COUNT',
      resumeCount: res.data.data
    });
  }).catch((err) => {
    console.log({ err })
  }).finally(() => {

  })
}
