Complx React Navigation Template


Switch + Drawer + Tab + Stack Navigator basics 


- AppSwitchNavigator
    - Welcome Screen
        - Login Screen
        - Sign Up Button

      - AppDrawerNavigator
            - Dashboard - DashboardStackNabigator(needed for and to change the header based on the tab)

            - DashboardTabNavigator
                - Tab 1 - FeedStack
                - Tab 2 - ProfileStack
                - Tab3 - SettingStack
              - Any files you dont want to be a part of the tab  navigator can go here    



 --- We have SWITCH NAVIGATOR which has DRAWER NAVIGATOR inside it 

    - Inside DRAWER NAVIGATOR we have dashboard screen ---> DashBoard STACK NAVIGATOR

        - Inside DashBoard STACK NAVIGATOR we have TAB NAVIGATOR

                ++  TAB NAVIGATOR  have dynamic header