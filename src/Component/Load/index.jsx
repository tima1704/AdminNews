import Style from './Load.module.scss'
const load = () => {
    return(
        <section className={Style.root}><div className={Style.lds_ripple}><div></div><div></div></div></section>
    )
}
export default load