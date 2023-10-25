import { useState } from 'react';
import { Tab } from 'semantic-ui-react';
import { Info , Settings , AddAddress, Orders } from '@/components/Account';
import BasicLayout from '@/layouts/BasicLayout/BasicLayout';
import styles from  './account.module.scss';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';
import { Separator ,  Seo} from '@/components/Shared'; 
import { WishList } from '@/components/Account';





function AccountPage() {

  const [reload, setReload] = useState(false);

  const { user , logout } = useAuth();
  const router = useRouter();


   if (!user) {
    router.push('/');
    return null;
   }

   const onReload = () => setReload(prevState => !prevState); 

  const panesObjs = [
    {
      menuItem : "My Orders",
      attached : false,
      title : <Orders />
    },
    {
      menuItem : "Wishlist",
      attached : false,
      title : <WishList />
    },
    {
      menuItem : "Address",
      attached : false,
      title : <AddAddress.Address onReload = {onReload}/>,
      titleTwo : <AddAddress.ListAddresses reload = {reload} onReload = {onReload}/>
    },    
    {
      menuItem : {key : 21 , icon : "settings", content :"Settings"},
      attached : false,
      title : <Settings.ChangeNameForm />,
      titleTwo : <Settings.ChangeEmailForm />,
      titleThree : <Settings.ChangePasswordForm />
    },
      {
      menuItem : {
      key : 22,
      icon : "log out",
      content : "Logout",
      onClick : logout,

      }

    }

  ];

  const panes = panesObjs.map((a) => {

  return { 
      menuItem : a.menuItem,
      render : () => (
      <Tab.Pane attached = {a.attached }>
          {a.title}
         <div className={styles.containerForms}>
          {a.titleTwo}
          {a.titleThree}
         </div>
          <Separator height = {100}/>
      </Tab.Pane>),
      }
    })


  return (
    <>
      <Seo title = "Account" />
       <BasicLayout isContainer relative>
        <Info />

        <Tab 
        menu = {{ secondary : true , pointing : true}} 
        panes = {panes} 
        className = {styles.tabs} 
        />
       </BasicLayout>
      
    </>
  )
}

export default AccountPage;
