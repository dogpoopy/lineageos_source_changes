## 📜 LineageOS Source Changes (Last 30 Days)

<details>
<summary><b>android</b></summary>

- [050d4d5](https://github.com/LineageOS/android/commit/050d4d5) manifest: Unfork more repos
  
  Author: Michael Bestas  
  Date: Wed Jul 23 19:31:26 2025 +0300

- [dd093eb](https://github.com/LineageOS/android/commit/dd093eb) manifest: Unfork repos with no changes
  
  Author: Michael Bestas  
  Date: Mon Jul 21 14:20:45 2025 +0300


</details>

<details>
<summary><b>build/make</b></summary>

- [7631c3c](https://github.com/LineageOS/android_build/commit/7631c3c) Revert &quot;Drop legacy vboot support.&quot;
  
  Author: Nolen Johnson  
  Date: Mon Aug 11 14:25:30 2025 -0400

- [8401cef](https://github.com/LineageOS/android_build/commit/8401cef) releasetools: Unconditionally store recovery.img in non-A/B OTA
  
  Author: LuK1337  
  Date: Mon Aug 11 14:23:48 2025 -0400

- [5316e57](https://github.com/LineageOS/android_build/commit/5316e57) releasetools: Make recovery patch use bsdiff exclusively
  
  Author: Gérard Parat  
  Date: Mon Aug 11 14:23:47 2025 -0400

- [745a0b1](https://github.com/LineageOS/android_build/commit/745a0b1) build: Enable super image build rules depending on single super block device
  
  Author: Yumi Yukimura  
  Date: Mon Aug 11 14:21:32 2025 -0400

- [60a3fda](https://github.com/LineageOS/android_build/commit/60a3fda) releasetools: Pass non-sparse super_empty.img to update_dynamic_partitions()
  
  Author: Yumi Yukimura  
  Date: Mon Aug 11 14:21:32 2025 -0400

- [670cbe1](https://github.com/LineageOS/android_build/commit/670cbe1) releasetools: build_super_image: Do not set readonly attr
  
  Author: Yumi Yukimura  
  Date: Mon Aug 11 14:21:32 2025 -0400

- [3469556](https://github.com/LineageOS/android_build/commit/3469556) Fix unified a/b zip generation failure
  
  Author: Aaron Kling  
  Date: Sun Jul 27 23:22:14 2025 -0400

- [d27fe35](https://github.com/LineageOS/android_build/commit/d27fe35) releasetools: Fallback to calculated fp if partition fp is missing
  
  Author: Aaron Kling  
  Date: Sun Jul 27 23:22:05 2025 -0400

- [fcc3738](https://github.com/LineageOS/android_build/commit/fcc3738) build: Separate commands in recovery foreach loops
  
  Author: Matt Mower  
  Date: Sat Jul 26 15:22:42 2025 +0100

- [6d27abb](https://github.com/LineageOS/android_build/commit/6d27abb) build: recovery: Support adding device-specific items
  
  Author: Tom Marshall  
  Date: Sat Jul 26 15:09:49 2025 +0100

- [e9e3c97](https://github.com/LineageOS/android_build/commit/e9e3c97) releasetools: squash backuptool support
  
  Author: Chris Soyars  
  Date: Sun Jul 20 16:56:17 2025 +0300

- [69ccf41](https://github.com/LineageOS/android_build/commit/69ccf41) build: ota: Support for install tools in /tmp/install
  
  Author: Tom Marshall  
  Date: Sun Jul 20 16:55:32 2025 +0300

- [81341d0](https://github.com/LineageOS/android_build/commit/81341d0) Add build support for XZ ramdisks
  
  Author: Luca Stefani  
  Date: Sun Jul 20 16:52:52 2025 +0300

- [f20f923](https://github.com/LineageOS/android_build/commit/f20f923) Fix recovery image generation with LZ4 compressed ramdisk
  
  Author: Arne Coucheron  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [d39d7ac](https://github.com/LineageOS/android_build/commit/d39d7ac) build: Introduce android-info-extra.txt support
  
  Author: Bruno Martins  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [2f8f168](https://github.com/LineageOS/android_build/commit/2f8f168) core: Treat vendor/lineage-priv/* as release-keys
  
  Author: LuK1337  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [583d986](https://github.com/LineageOS/android_build/commit/583d986) Conditionally use Unix epoch time for build incremental
  
  Author: Michael Bestas  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [da5e0f6](https://github.com/LineageOS/android_build/commit/da5e0f6) core: Allow overriding device/model/name/fingerprint properties
  
  Author: LuK1337  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [74630ce](https://github.com/LineageOS/android_build/commit/74630ce) Export PRODUCT_BUILD_PROP_OVERRIDES to soong
  
  Author: Luca Stefani  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [fef05fc](https://github.com/LineageOS/android_build/commit/fef05fc) releasetools: Handle build description not ending in -keys
  
  Author: Michael Bestas  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [adb5003](https://github.com/LineageOS/android_build/commit/adb5003) releasetools: Fix fstab path detection when input_file is a path to zip
  
  Author: LuK1337  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [02d080f](https://github.com/LineageOS/android_build/commit/02d080f) releasetools: Add script to sign zips
  
  Author: Gabriele M  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [9c625a2](https://github.com/LineageOS/android_build/commit/9c625a2) releasetools: support reading release keys out of some sort of command
  
  Author: Tom Powell  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [f3f13de](https://github.com/LineageOS/android_build/commit/f3f13de) Add bluetooth to default key map
  
  Author: HZ  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [de770fc](https://github.com/LineageOS/android_build/commit/de770fc) Don&#x27;t set PRODUCT_ENABLE_UFFD_GC by default
  
  Author: Chirayu Desai  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [4b90ddb](https://github.com/LineageOS/android_build/commit/4b90ddb) Add `CHRE_DAEMON_LOAD_INTO_SENSORSPD` to soong_config_variable
  
  Author: Michael Bestas  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [feaa8bf](https://github.com/LineageOS/android_build/commit/feaa8bf) layoutlib: Use wildcard to find device overlays
  
  Author: Dmitrii  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [f824af2](https://github.com/LineageOS/android_build/commit/f824af2) Remove non-existent com.android.ranging package
  
  Author: Thomas Turner  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [c0add17](https://github.com/LineageOS/android_build/commit/c0add17) Disable Traceur for non eng-builds
  
  Author: Aaron Kling  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [e45b7fa](https://github.com/LineageOS/android_build/commit/e45b7fa) Unset BOARD_EXT4_SHARE_DUP_BLOCKS
  
  Author: LuK1337  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [25c709c](https://github.com/LineageOS/android_build/commit/25c709c) build_image: Allow disabling custom inode count calculation
  
  Author: Christian Oder  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [1e56910](https://github.com/LineageOS/android_build/commit/1e56910) releasetools: Use the first entry of a mount point when reading fstab
  
  Author: Brint E. Kriebel  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [eea3865](https://github.com/LineageOS/android_build/commit/eea3865) Edify: Add abort message for bootloader asserts
  
  Author: Matt Mower  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [4f58a70](https://github.com/LineageOS/android_build/commit/4f58a70) ota: Disable downgrade check
  
  Author: Andrew Dodd  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [4963706](https://github.com/LineageOS/android_build/commit/4963706) Add TARGET_RECOVERY_DEFAULT_TOUCH_ROTATION flag
  
  Author: LuK1337  
  Date: Sun Jul 20 16:52:51 2025 +0300

- [0c0e9a3](https://github.com/LineageOS/android_build/commit/0c0e9a3) Remove unused locale data for recovery
  
  Author: Alessandro Astone  
  Date: Sun Jul 20 16:52:50 2025 +0300

- [f4cbb91](https://github.com/LineageOS/android_build/commit/f4cbb91) Add blank_unblank_on_init to PRIVATE_RECOVERY_UI_PROPERTIES
  
  Author: Michael Bestas  
  Date: Sun Jul 20 16:52:50 2025 +0300

- [df6b67a](https://github.com/LineageOS/android_build/commit/df6b67a) Allow setting the recovery density separately from the aapt config
  
  Author: Chirayu Desai  
  Date: Sun Jul 20 16:52:50 2025 +0300

- [c3049a9](https://github.com/LineageOS/android_build/commit/c3049a9) Don&#x27;t enable ADB by default on userdebug builds
  
  Author: Michael Bestas  
  Date: Sun Jul 20 16:52:50 2025 +0300

- [9a71028](https://github.com/LineageOS/android_build/commit/9a71028) Allow override of device asserts, including multi-device support.
  
  Author: Steve Kondik  
  Date: Sun Jul 20 16:52:50 2025 +0300


</details>

<details>
<summary><b>build/soong</b></summary>

- [877867f](https://github.com/LineageOS/android_build_soong/commit/877867f) Revert &quot;Replace qti_kernel_headers with generated_kernel_headers&quot;
  
  Author: Michael Bestas  
  Date: Sun Jul 20 17:40:25 2025 +0300


</details>

<details>
<summary><b>device/qcom/sepolicy</b></summary>

- [e9336a0](https://github.com/LineageOS/android_device_qcom_sepolicy/commit/e9336a0) AKS: sepolicy for gamepad
  
  Author: quic_farenl  
  Date: Mon Jul 21 14:15:20 2025 +0300

- [7d2161a](https://github.com/LineageOS/android_device_qcom_sepolicy/commit/7d2161a) Revert &quot;sepolicy: Allow isolated_compute_app to be a client of DSP HAL&quot;
  
  Author: Michael Bestas  
  Date: Mon Jul 21 14:15:20 2025 +0300

- [775be6b](https://github.com/LineageOS/android_device_qcom_sepolicy/commit/775be6b) Revert &quot;Add LocAidlGnss service in hal_gnss_service domain&quot;
  
  Author: Michael Bestas  
  Date: Mon Jul 21 14:15:20 2025 +0300


</details>

<details>
<summary><b>device/qcom/sepolicy_vndr/legacy-um</b></summary>

- [fc367b4](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/fc367b4) sepolicy: holi: Label pmr735a power supply nodes
  
  Author: LuK1337  
  Date: Mon Aug 4 15:56:22 2025 +0200

- [43df9b9](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/43df9b9) sepolicy_vndr: Allow USB HAL to read display brightness
  
  Author: Wesley Cheng  
  Date: Thu Jul 17 19:54:00 2025 +0300

- [c899aae](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/c899aae) sepolicy: Remove sysfs_udc label
  
  Author: Michael Bestas  
  Date: Thu Jul 17 17:14:05 2025 +0300

- [1e21b69](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/1e21b69) sepolicy_vndr: Allow USB HAL to access udc sysfs nodes
  
  Author: Akash Kumar  
  Date: Thu Jul 17 17:13:42 2025 +0300

- [c1470c4](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/c1470c4) sepolicy: Remove mem_sleep sysfs label
  
  Author: ViShal69x  
  Date: Thu Jul 17 16:26:54 2025 +0300


</details>

<details>
<summary><b>device/qcom/sepolicy_vndr/sm8450</b></summary>

- [1859384](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/1859384) sepolicy_vndr: Allow USB HAL to read display brightness
  
  Author: Wesley Cheng  
  Date: Thu Jul 17 18:41:46 2025 +0300

- [2d3f4b5](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/2d3f4b5) sepolicy: Remove sysfs_udc label
  
  Author: Michael Bestas  
  Date: Thu Jul 17 16:44:16 2025 +0300

- [f67ab6e](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/f67ab6e) sepolicy: Remove mem_sleep sysfs label
  
  Author: ViShal69x  
  Date: Thu Jul 17 16:44:16 2025 +0300

- [abb66ea](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/abb66ea) taro: Label additional read_ahead_kb node
  
  Author: Nolen Johnson  
  Date: Thu Jul 17 16:44:16 2025 +0300

- [07c7566](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/07c7566) sepolicy: Drop hal_fingerprint_fpc rules
  
  Author: Michael Bestas  
  Date: Thu Jul 17 16:44:16 2025 +0300

- [86079dc](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/86079dc) sepolicy: NFC: Label NXP NFC 2.0 HIDL
  
  Author: Luofan Chen  
  Date: Thu Jul 17 16:44:16 2025 +0300

- [fdc21e5](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/fdc21e5) sepolicy: NFC: Add support for snxxx AIDL service
  
  Author: Khageswararao Rao B  
  Date: Thu Jul 17 16:44:16 2025 +0300

- [de6e834](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/de6e834) sepolicy_vndr: allow sensors HAL to do binder call to system_server
  
  Author: Jun-Hyung Kwon  
  Date: Thu Jul 17 16:44:16 2025 +0300

- [9fc6e45](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/9fc6e45) sepolicy: Add default permission for aidl hal_bootctl
  
  Author: Anthony Adamo  
  Date: Thu Jul 17 16:44:16 2025 +0300

- [f16b4c3](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/f16b4c3) common: Label /sys/class/qcom-battery for everyone
  
  Author: Michael Bestas  
  Date: Thu Jul 17 16:44:16 2025 +0300

- [d8873a1](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/d8873a1) sepolicy: Allow USB HAL to rw usb_data_enabled nodes
  
  Author: LuK1337  
  Date: Thu Jul 17 16:44:16 2025 +0300

- [a476a43](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/a476a43) common: Switch to AIDL USB HALs
  
  Author: Michael Bestas  
  Date: Thu Jul 17 16:44:16 2025 +0300

- [66290bf](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/66290bf) common: Switch to AIDL thermal HAL
  
  Author: Michael Bestas  
  Date: Thu Jul 17 16:44:16 2025 +0300

- [9be61fa](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/9be61fa) sepolicy_vndr: Allow init/vendor_init to write proc firmware config
  
  Author: Luofan Chen  
  Date: Thu Jul 17 16:44:16 2025 +0300

- [265585b](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/265585b) sepolicy_vndr: Label proc firmware config node
  
  Author: Luofan Chen  
  Date: Thu Jul 17 16:44:16 2025 +0300

- [55d72ab](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/55d72ab) qva: Label qcom,battery_charger extcon
  
  Author: Michael Bestas  
  Date: Thu Jul 17 16:44:15 2025 +0300

- [4a1ea85](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/4a1ea85) qva: Extend extcon rules
  
  Author: Bruno Martins  
  Date: Thu Jul 17 16:44:15 2025 +0300

- [b4bc81b](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/b4bc81b) Add IQtiRadio in vendor
  
  Author: Suresh Koleti  
  Date: Thu Jul 17 16:44:15 2025 +0300

- [70fa599](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/70fa599) sepolicy: Label vendor.qti.ims.factoryaidlservice.IImsFactory
  
  Author: Michael Bestas  
  Date: Thu Jul 17 16:44:15 2025 +0300

- [fc0897f](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/fc0897f) sepolicy: Move some AIDL rules to common policy
  
  Author: Michael Bestas  
  Date: Thu Jul 17 16:44:15 2025 +0300

- [64eb4f7](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/64eb4f7) sepolicy_vndr: Add IQtiOemHook and IDeviceInfo
  
  Author: Sridhar Kasukurthi  
  Date: Thu Jul 17 16:44:15 2025 +0300

- [fd46a0d](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/fd46a0d) taro: Label discard_max_bytes sysfs
  
  Author: Michael Bestas  
  Date: Thu Jul 17 16:44:15 2025 +0300

- [a975e44](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/a975e44) generic: Allow init write to discard_max_bytes
  
  Author: dianlujitao  
  Date: Thu Jul 17 16:44:15 2025 +0300

- [27f6322](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/27f6322) sepolicy: enable vibrator HAL to access qcom-haptics class sysfs
  
  Author: xuanpeng  
  Date: Thu Jul 17 16:44:15 2025 +0300

- [556c970](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/556c970) device/qcom/sepolicy_vndr : Support Widevine AIDL
  
  Author: Phalguni Bumhyavarapu  
  Date: Thu Jul 17 16:44:15 2025 +0300

- [f3e929d](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/f3e929d) device/qcom/sepolicy_vndr : Support Widevine AIDL
  
  Author: Phalguni Bumhyavarapu  
  Date: Thu Jul 17 16:44:15 2025 +0300

- [5fab010](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/5fab010) sepolicy_vndr: Allow qti_init_shell to set watermark boost factor
  
  Author: Alexander Winkowski  
  Date: Thu Jul 17 16:44:15 2025 +0300

- [5c4fd73](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/5c4fd73) sepolicy_vndr: allow init_shell to access proc_watermark_scale_factor.
  
  Author: Divyanand Rangu  
  Date: Thu Jul 17 16:44:15 2025 +0300

- [b8ee654](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/b8ee654) sepolicy_vndr: update sepolicy for health HAL service
  
  Author: Fenglin Wu  
  Date: Thu Jul 17 16:44:15 2025 +0300

- [2fabad0](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/2fabad0) sepolicy_vndr: Remove vendor_service.
  
  Author: Steven Moreland  
  Date: Thu Jul 17 16:44:15 2025 +0300

- [6246ee9](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/6246ee9) sepolicy_vndr: isolated_app -&gt; isolated_app_all
  
  Author: LuK1337  
  Date: Thu Jul 17 16:34:27 2025 +0300

- [940e228](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/940e228) sepolicy_vndr: common: Label UCSI power supply
  
  Author: Bruno Martins  
  Date: Thu Jul 17 16:34:27 2025 +0300

- [c65b0f0](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/c65b0f0) sepolicy_vndr: Remove duplicate hwservice_contexts
  
  Author: Bruno Martins  
  Date: Thu Jul 17 16:34:27 2025 +0300

- [f1da331](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/f1da331) sepolicy_vndr: qva: Update QTI USB HAL to v1.3
  
  Author: Alexander Koskovich  
  Date: Thu Jul 17 16:34:24 2025 +0300

- [2b434d6](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/2b434d6) sepolicy_vndr: qva: Allow vendor_cnd to read wifi_hal_prop
  
  Author: Arian  
  Date: Thu Jul 17 16:34:24 2025 +0300

- [21ddbc3](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/21ddbc3) sepolicy_vndr: generic: Add app_data_file_type to vendor_radio_data_file
  
  Author: Arian  
  Date: Thu Jul 17 16:34:24 2025 +0300

- [01ef581](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/01ef581) sepolicy_vndr: generic: Fix compilation issues for newer upgrade
  
  Author: Himanshu Agrawal  
  Date: Thu Jul 17 16:34:24 2025 +0300

- [96a963f](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/96a963f) sepolicy_vndr: Switch to SYSTEM_EXT_{PUBLIC,PRIVATE}_SEPOLICY_DIRS
  
  Author: Michael Bestas  
  Date: Thu Jul 17 16:34:23 2025 +0300

- [1c5a4a7](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/1c5a4a7) sepolicy_vndr: Switch to BOARD_VENDOR_SEPOLICY_DIRS
  
  Author: Aayush Gupta  
  Date: Thu Jul 17 16:34:23 2025 +0300

- [960cbfe](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/960cbfe) sepolicy: Update paths for new repository location
  
  Author: Michael Bestas  
  Date: Thu Jul 17 16:34:23 2025 +0300

- [dd6ac51](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/dd6ac51) sepolicy_vndr: Remove QCOM guards
  
  Author: Pig  
  Date: Thu Jul 17 16:34:23 2025 +0300

- [c1a7869](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/c1a7869) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Thu Jul 17 16:34:23 2025 +0300


</details>

<details>
<summary><b>device/qcom/sepolicy_vndr/sm8550</b></summary>

- [e28bbda](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/e28bbda) sepolicy_vndr: Allow USB HAL to read display brightness
  
  Author: Wesley Cheng  
  Date: Thu Jul 17 18:42:11 2025 +0300

- [b63ca4c](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/b63ca4c) sepolicy: Remove sysfs_udc label
  
  Author: Michael Bestas  
  Date: Thu Jul 17 16:48:58 2025 +0300

- [091adb1](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/091adb1) sepolicy_vndr: Allow USB HAL to access udc sysfs nodes
  
  Author: Akash Kumar  
  Date: Thu Jul 17 16:48:51 2025 +0300

- [0b90ffb](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/0b90ffb) sepolicy: Remove mem_sleep sysfs label
  
  Author: ViShal69x  
  Date: Thu Jul 17 16:48:29 2025 +0300

- [5bdc9f7](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/5bdc9f7) sepolicy: Drop hal_fingerprint_fpc rules
  
  Author: Michael Bestas  
  Date: Thu Jul 17 16:48:29 2025 +0300

- [be4b456](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/be4b456) sepolicy: NFC: Label NXP NFC 2.0 HIDL
  
  Author: Luofan Chen  
  Date: Thu Jul 17 16:48:29 2025 +0300

- [4f32151](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/4f32151) sepolicy: NFC: Add support for snxxx AIDL service
  
  Author: Khageswararao Rao B  
  Date: Thu Jul 17 16:48:29 2025 +0300

- [8b34ab0](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/8b34ab0) sepolicy: Add default permission for aidl hal_bootctl
  
  Author: Anthony Adamo  
  Date: Thu Jul 17 16:48:29 2025 +0300

- [8b0d92b](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/8b0d92b) common: Label /sys/class/qcom-battery for everyone
  
  Author: Michael Bestas  
  Date: Thu Jul 17 16:48:29 2025 +0300

- [0f1d1bd](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/0f1d1bd) sepolicy: Allow USB HAL to rw usb_data_enabled nodes
  
  Author: LuK1337  
  Date: Thu Jul 17 16:48:29 2025 +0300

- [deebddb](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/deebddb) common: Switch to AIDL USB HALs
  
  Author: Michael Bestas  
  Date: Thu Jul 17 16:48:29 2025 +0300

- [d48a339](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/d48a339) common: Switch to AIDL thermal HAL
  
  Author: Michael Bestas  
  Date: Thu Jul 17 16:48:29 2025 +0300

- [43387c0](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/43387c0) sepolicy_vndr: Allow init/vendor_init to write proc firmware config
  
  Author: Luofan Chen  
  Date: Thu Jul 17 16:48:29 2025 +0300

- [a2bb15a](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/a2bb15a) sepolicy_vndr: Label proc firmware config node
  
  Author: Luofan Chen  
  Date: Thu Jul 17 16:48:29 2025 +0300

- [426f591](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/426f591) sepolicy: add missing sepolicy rules for kalama
  
  Author: someone5678  
  Date: Thu Jul 17 16:48:24 2025 +0300

- [e7c285d](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/e7c285d) sepolicy: add sys_module capability for hal_wifi_default
  
  Author: Hu Wang  
  Date: Thu Jul 17 16:47:22 2025 +0300

- [d0f1554](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/d0f1554) sepolicy: Label vendor.qti.ims.factoryaidlservice.IImsFactory
  
  Author: Michael Bestas  
  Date: Thu Jul 17 16:47:22 2025 +0300

- [0d8eeac](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/0d8eeac) sepolicy: Move some AIDL rules to common policy
  
  Author: Michael Bestas  
  Date: Thu Jul 17 16:47:22 2025 +0300

- [2ad686a](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/2ad686a) Relax neverallows for vendor to use /system/bin/sh
  
  Author: Bruno Martins  
  Date: Thu Jul 17 16:47:22 2025 +0300

- [ea9c967](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/ea9c967) qva: Fix test compilation
  
  Author: Bruno Martins  
  Date: Thu Jul 17 16:47:22 2025 +0300

- [f272b70](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/f272b70) sepolicy_vndr: Remove vendor_service.
  
  Author: Steven Moreland  
  Date: Thu Jul 17 16:47:17 2025 +0300

- [113b7c9](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/113b7c9) sepolicy_vndr: isolated_app -&gt; isolated_app_all
  
  Author: LuK1337  
  Date: Thu Jul 17 16:47:16 2025 +0300

- [29f7009](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/29f7009) sepolicy_vndr: Extend extcon rules
  
  Author: Bruno Martins  
  Date: Thu Jul 17 16:47:16 2025 +0300

- [c05d8fc](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/c05d8fc) sepolicy_vndr: common: Label UCSI power supply
  
  Author: Bruno Martins  
  Date: Thu Jul 17 16:47:16 2025 +0300

- [e8c6b8c](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/e8c6b8c) sepolicy_vndr: Remove duplicate hwservice_contexts
  
  Author: Bruno Martins  
  Date: Thu Jul 17 16:47:16 2025 +0300

- [833d361](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/833d361) sepolicy_vndr: qva: Update QTI USB HAL to v1.3
  
  Author: Alexander Koskovich  
  Date: Thu Jul 17 16:47:16 2025 +0300

- [17cf661](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/17cf661) sepolicy_vndr: qva: Allow vendor_cnd to read wifi_hal_prop
  
  Author: Arian  
  Date: Thu Jul 17 16:47:16 2025 +0300

- [3745589](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/3745589) sepolicy_vndr: generic: Add app_data_file_type to vendor_radio_data_file
  
  Author: Arian  
  Date: Thu Jul 17 16:47:16 2025 +0300

- [885afcb](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/885afcb) sepolicy_vndr: generic: Fix compilation issues for newer upgrade
  
  Author: Himanshu Agrawal  
  Date: Thu Jul 17 16:47:16 2025 +0300

- [a6e38cd](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/a6e38cd) sepolicy_vndr: Switch to BOARD_VENDOR_SEPOLICY_DIRS
  
  Author: Aayush Gupta  
  Date: Thu Jul 17 16:47:16 2025 +0300

- [80616ba](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/80616ba) sepolicy: Update paths for new repository location
  
  Author: Michael Bestas  
  Date: Thu Jul 17 16:47:16 2025 +0300

- [3f92569](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/3f92569) sepolicy_vndr: Remove QCOM guards
  
  Author: Pig  
  Date: Thu Jul 17 16:47:16 2025 +0300

- [2801a61](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/2801a61) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Thu Jul 17 16:47:16 2025 +0300


</details>

<details>
<summary><b>device/qcom/sepolicy_vndr/sm8750</b></summary>

- [89c7b4d](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/89c7b4d) qva: Extend extcon rules
  
  Author: Bruno Martins  
  Date: Sun Jul 20 01:22:03 2025 +0100

- [abaa654](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/abaa654) generic: Allow init write to discard_max_bytes
  
  Author: dianlujitao  
  Date: Sun Jul 20 01:02:31 2025 +0100

- [76ca314](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/76ca314) sun: Label discard_max_bytes sysfs
  
  Author: Michael Bestas  
  Date: Sun Jul 20 01:02:31 2025 +0100


</details>

<details>
<summary><b>external/ntfs-3g</b></summary>

- [e2415df](https://github.com/LineageOS/android_external_ntfs-3g/commit/e2415df) config.h: Update version to 2022.10.3
  
  Author: Michael Bestas  
  Date: Thu Jul 17 14:50:01 2025 +0300

- [6fafa7f](https://github.com/LineageOS/android_external_ntfs-3g/commit/6fafa7f) Merge tag &#x27;2022.10.3&#x27; of https://github.com/tuxera/ntfs-3g into lineage-22.2
  
  Author: Michael Bestas  
  Date: Thu Jul 17 14:48:04 2025 +0300


</details>

<details>
<summary><b>frameworks/av</b></summary>

- [5cad168](https://github.com/LineageOS/android_frameworks_av/commit/5cad168) libstagefright: Conditionally disable `thumbnail_block_model`
  
  Author: ahnet-69  
  Date: Wed Jul 30 16:57:26 2025 +0000


</details>

<details>
<summary><b>frameworks/native</b></summary>

- [3ae992f8](https://github.com/LineageOS/android_frameworks_native/commit/3ae992f8) libgui: reset buffer count to max slots instead of returning BAD_VALUE.
  
  Author: Rajat Yadav  
  Date: Wed Jul 30 01:30:55 2025 +0300


</details>

<details>
<summary><b>hardware/interfaces</b></summary>

- [a29bff7](https://github.com/LineageOS/android_hardware_interfaces/commit/a29bff7) compatibility_matrices: Bring HIDL Radio entries to FCM 7
  
  Author: Yumi Yukimura  
  Date: Mon Aug 11 19:31:45 2025 -0400

- [481d0d8](https://github.com/LineageOS/android_hardware_interfaces/commit/481d0d8) cec: Don&#x27;t spam &quot;Machine is not on the network&quot;
  
  Author: Nolen Johnson  
  Date: Sun Aug 10 22:19:20 2025 -0400

- [9d787eb](https://github.com/LineageOS/android_hardware_interfaces/commit/9d787eb) bluetooth: do not fatally error on unknown packet types
  
  Author: Billy Laws  
  Date: Sun Aug 10 22:19:20 2025 -0400

- [d3e0390](https://github.com/LineageOS/android_hardware_interfaces/commit/d3e0390) audio: Verify that hal implements get_audio_port before calling
  
  Author: Aaron Kling  
  Date: Sun Aug 10 22:19:20 2025 -0400

- [2ac433b](https://github.com/LineageOS/android_hardware_interfaces/commit/2ac433b) compatibility_matrices: Add kernel_config_s_4.14
  
  Author: Michael Bestas  
  Date: Thu Jul 31 00:46:02 2025 +0300

- [ed83fec](https://github.com/LineageOS/android_hardware_interfaces/commit/ed83fec) interfaces: fix disable_configstore
  
  Author: Dmitrii  
  Date: Thu Jul 31 00:46:01 2025 +0300

- [308d97f](https://github.com/LineageOS/android_hardware_interfaces/commit/308d97f) radiocompat: Implement iccCloseLogicalChannelWithSessionInfo()
  
  Author: LuK1337  
  Date: Thu Jul 31 00:46:01 2025 +0300

- [add589f](https://github.com/LineageOS/android_hardware_interfaces/commit/add589f) compatibility_matrices: Allow radio 1.5 on target-level 6
  
  Author: Yumi Yukimura  
  Date: Thu Jul 31 00:46:01 2025 +0300

- [f1b0dfc](https://github.com/LineageOS/android_hardware_interfaces/commit/f1b0dfc) Camera: Remap camera IDs by property if it is defined
  
  Author: Ivan Vecera  
  Date: Thu Jul 31 00:46:01 2025 +0300

- [e8b756c](https://github.com/LineageOS/android_hardware_interfaces/commit/e8b756c) Camera: Maintain set of non-external cameras
  
  Author: Ivan Vecera  
  Date: Thu Jul 31 00:46:01 2025 +0300

- [3f55060](https://github.com/LineageOS/android_hardware_interfaces/commit/3f55060) fpc: Fix potential nullptr derefs
  
  Author: LuK1337  
  Date: Thu Jul 31 00:46:01 2025 +0300

- [53af31a](https://github.com/LineageOS/android_hardware_interfaces/commit/53af31a) Revert &quot;fpc: keep fpc in system-background&quot;
  
  Author: Jake Weinstein  
  Date: Thu Jul 31 00:46:01 2025 +0300

- [ace5734](https://github.com/LineageOS/android_hardware_interfaces/commit/ace5734) btaudio: aidl: add 16 bit sample rate for aptX offloading
  
  Author: klozz  
  Date: Thu Jul 31 00:46:01 2025 +0300

- [a3647b0](https://github.com/LineageOS/android_hardware_interfaces/commit/a3647b0) btaudio: aidl: Support offloading all LDAC qualities
  
  Author: Adithya R  
  Date: Thu Jul 31 00:46:01 2025 +0300

- [94b0639](https://github.com/LineageOS/android_hardware_interfaces/commit/94b0639) camera: Make overrideFormat from reserved fields opt-in
  
  Author: Rohit Sekhar  
  Date: Thu Jul 31 00:46:01 2025 +0300

- [3965516](https://github.com/LineageOS/android_hardware_interfaces/commit/3965516) frameworks: Update HIDL overrideFormat from HAL
  
  Author: Abhijit Trivedi  
  Date: Thu Jul 31 00:46:01 2025 +0300


</details>

<details>
<summary><b>hardware/lineage/compat</b></summary>

- [6fc7494](https://github.com/LineageOS/android_hardware_lineage_compat/commit/6fc7494) compat: Provide libui-v34
  
  Author: Frost  
  Date: Wed Jul 30 17:04:35 2025 +0300

- [1628d05](https://github.com/LineageOS/android_hardware_lineage_compat/commit/1628d05) compat: Provide libaudioroute-v34
  
  Author: basamaryan  
  Date: Mon Jul 21 11:41:18 2025 +0000

- [00c45bb](https://github.com/LineageOS/android_hardware_lineage_compat/commit/00c45bb) compat: Enable ELF checks
  
  Author: basamaryan  
  Date: Fri Jul 18 21:16:15 2025 +0000

- [84e648a](https://github.com/LineageOS/android_hardware_lineage_compat/commit/84e648a) compat: Drop unused libbinder-v32 blobs
  
  Author: Michael Bestas  
  Date: Fri Jul 18 21:15:52 2025 +0000

- [d6c865c](https://github.com/LineageOS/android_hardware_lineage_compat/commit/d6c865c) compat: Drop unused libui-v30 blobs
  
  Author: Michael Bestas  
  Date: Fri Jul 18 21:15:17 2025 +0000

- [e7565ff](https://github.com/LineageOS/android_hardware_lineage_compat/commit/e7565ff) compat: Drop ndk_platform libs
  
  Author: Michael Bestas  
  Date: Fri Jul 18 22:17:31 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/common</b></summary>

- [8e91e46](https://github.com/LineageOS/android_hardware_qcom-caf_common/commit/8e91e46) rfs: Add modem_firmware to RFS install targets
  
  Author: kmiit  
  Date: Sun Aug 10 08:43:34 2025 +0000

- [9c45155](https://github.com/LineageOS/android_hardware_qcom-caf_common/commit/9c45155) qcom: Map kernel headers to generated_kernel_headers
  
  Author: Michael Bestas  
  Date: Sun Jul 20 23:36:59 2025 +0300

- [3be73bc](https://github.com/LineageOS/android_hardware_qcom-caf_common/commit/3be73bc) qcom: Split soong configs for STHAL
  
  Author: Michael Bestas  
  Date: Sun Jul 20 23:36:56 2025 +0300

- [76dca5b](https://github.com/LineageOS/android_hardware_qcom-caf_common/commit/76dca5b) common: Add liboemcrypto.so to vendor linker config
  
  Author: LuK1337  
  Date: Sun Jul 20 22:01:03 2025 +0200


</details>

<details>
<summary><b>hardware/qcom-caf/sm8450/audio/primary-hal</b></summary>

- [247b6cc](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/247b6cc) libbatterylistener: Switch to AIDL health HAL for everyone
  
  Author: Michael Bestas  
  Date: Wed Jul 16 22:46:34 2025 +0300

- [819819a](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/819819a) hal: Add LVACFS microphone feature
  
  Author: pjgowtham  
  Date: Wed Jul 16 22:46:34 2025 +0300

- [91659bb](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/91659bb) hal: Add ultrasound proximity support
  
  Author: Arian  
  Date: Wed Jul 16 22:46:34 2025 +0300

- [fdfe3b6](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/fdfe3b6) configs: Allow setsockopt syscall for qcom c2audio
  
  Author: Arian  
  Date: Wed Jul 16 22:46:33 2025 +0300

- [685c2db](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/685c2db) hal: Replace direct pid writes with setting task profiles for audio interfaces
  
  Author: Suren Baghdasaryan  
  Date: Wed Jul 16 22:46:33 2025 +0300

- [28f0e7c](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/28f0e7c) audio-ar: Add attribute [[fallthrough]]
  
  Author: Swapnil Kangralkar(Temp)  
  Date: Wed Jul 16 22:46:33 2025 +0300

- [e5c35e3](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/e5c35e3) hal: Add dependency on libarpal_headers
  
  Author: Bruno Martins  
  Date: Wed Jul 16 22:46:33 2025 +0300

- [2306bb5](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/2306bb5) Disable 32 bit variants of audio libraries for 64 bit audio targets
  
  Author: Arian  
  Date: Wed Jul 16 22:46:19 2025 +0300

- [d84c318](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/d84c318) Convert audio makefiles to blueprint
  
  Author: Arian  
  Date: Wed Jul 16 22:46:18 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8550/audio/primary-hal</b></summary>

- [55c412e](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/55c412e) libbatterylistener: Switch to AIDL health HAL for everyone
  
  Author: Michael Bestas  
  Date: Thu Jul 17 01:44:46 2025 +0300

- [8e38165](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/8e38165) hal: Replace direct pid writes with setting task profiles for audio interfaces
  
  Author: Suren Baghdasaryan  
  Date: Thu Jul 17 01:44:46 2025 +0300

- [f3ffa09](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/f3ffa09) hal: Add dependency on libarpal_headers
  
  Author: Bruno Martins  
  Date: Thu Jul 17 01:44:45 2025 +0300

- [11ec4db](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/11ec4db) Disable 32 bit variants of audio libraries for 64 bit audio targets
  
  Author: Arian  
  Date: Thu Jul 17 01:44:41 2025 +0300

- [0d8d544](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/0d8d544) Convert audio makefiles to blueprint
  
  Author: Arian  
  Date: Thu Jul 17 01:44:38 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8650/audio/primary-hal</b></summary>

- [b9a2ccf](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/b9a2ccf) libbaterylistener: Remove unused HIDL health dependencies
  
  Author: Michael Bestas  
  Date: Fri Jul 18 15:47:50 2025 +0300

- [a5e2400](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/a5e2400) hal: Replace direct pid writes with setting task profiles for audio interfaces
  
  Author: Suren Baghdasaryan  
  Date: Fri Jul 18 15:47:50 2025 +0300

- [6fc2d87](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/6fc2d87) hal: Add dependency on libarpal_headers
  
  Author: Bruno Martins  
  Date: Fri Jul 18 15:47:50 2025 +0300

- [9e1add0](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/9e1add0) Convert audio makefiles to blueprint
  
  Author: Arian  
  Date: Thu Jul 17 01:43:34 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8650/display</b></summary>

- [9a0e246](https://github.com/LineageOS/android_hardware_qcom_display/commit/9a0e246) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Wed Jul 16 15:45:09 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8750/display/hal</b></summary>

- [85e88ca](https://github.com/LineageOS/android_hardware_qcom_display/commit/85e88ca) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Wed Jul 16 16:34:06 2025 +0300


</details>

<details>
<summary><b>lineage-sdk</b></summary>

- [c4ce388](https://github.com/LineageOS/android_lineage-sdk/commit/c4ce388) health: Fix limit notification
  
  Author: Luofan Chen  
  Date: Wed Jul 30 01:44:48 2025 +0300

- [cea2b3c](https://github.com/LineageOS/android_lineage-sdk/commit/cea2b3c) health: Implement new charging control battery listener
  
  Author: Luofan Chen  
  Date: Wed Jul 30 01:44:46 2025 +0300


</details>

<details>
<summary><b>packages/apps/Aperture</b></summary>

- [82d6068](https://github.com/LineageOS/android_packages_apps_Aperture/commit/82d6068) Aperture: Update CameraX to 1.5.0-rc01
  
  Author: LuK1337  
  Date: Wed Aug 13 20:29:33 2025 +0200

- [f1d7cb0](https://github.com/LineageOS/android_packages_apps_Aperture/commit/f1d7cb0) Aperture: Update CameraX to 1.5.0-beta02
  
  Author: LuK1337  
  Date: Wed Aug 13 19:38:01 2025 +0200

- [7f948a8](https://github.com/LineageOS/android_packages_apps_Aperture/commit/7f948a8) Automatic translation import
  
  Author: LineageOS Infra  
  Date: Fri Aug 1 21:13:43 2025 +0000


</details>

<details>
<summary><b>packages/apps/DocumentsUI</b></summary>

- [deb341e](https://github.com/LineageOS/android_packages_apps_DocumentsUI/commit/deb341e) DocumentsUI: add icons for shortcuts
  
  Author: Timi Rautamäki  
  Date: Wed Jul 30 01:27:22 2025 +0300

- [12dabaa](https://github.com/LineageOS/android_packages_apps_DocumentsUI/commit/12dabaa) DocumentsUI: add feature for adding shortcuts to launcher
  
  Author: Timi Rautamäki  
  Date: Wed Jul 30 01:27:22 2025 +0300

- [e4f8af6](https://github.com/LineageOS/android_packages_apps_DocumentsUI/commit/e4f8af6) DocumentsUI: Bring in the new icon
  
  Author: Asher Simonds  
  Date: Wed Jul 30 01:27:17 2025 +0300


</details>

<details>
<summary><b>packages/apps/Etar</b></summary>

- [a776cef](https://github.com/LineageOS/android_packages_apps_Etar/commit/a776cef) Etar: ./gradlew generateBp
  
  Author: LuK1337  
  Date: Fri Aug 1 10:42:49 2025 +0200

- [1d22fbf](https://github.com/LineageOS/android_packages_apps_Etar/commit/1d22fbf) Merge tag &#x27;v1.0.51&#x27; of https://github.com/Etar-Group/Etar-Calendar into lineage-23.0
  
  Author: LuK1337  
  Date: Fri Aug 1 10:39:45 2025 +0200

- [4ad343e](https://github.com/LineageOS/android_packages_apps_Etar/commit/4ad343e) New version 1.0.51
  
  Author: Gitsaibot  
  Date: Fri Aug 1 09:20:46 2025 +0200

- [5b1382a](https://github.com/LineageOS/android_packages_apps_Etar/commit/5b1382a) Bump gradle version
  
  Author: Jochen Sprickerhof  
  Date: Fri Aug 1 08:57:35 2025 +0200

- [cbda6f1](https://github.com/LineageOS/android_packages_apps_Etar/commit/cbda6f1) Update time zone database to 2025b
  
  Author: Jochen Sprickerhof  
  Date: Fri Aug 1 08:46:30 2025 +0200

- [f67a527](https://github.com/LineageOS/android_packages_apps_Etar/commit/f67a527) Fix Event date picker for end date always preselects start
  
  Author: Gitsaibot  
  Date: Fri Aug 1 08:20:47 2025 +0200

- [ce5e43d](https://github.com/LineageOS/android_packages_apps_Etar/commit/ce5e43d) Bump org.jetbrains.gradle.plugin.idea-ext from 1.1.10 to 1.2
  
  Author: dependabot[bot]  
  Date: Fri Aug 1 08:06:03 2025 +0200

- [529b1b7](https://github.com/LineageOS/android_packages_apps_Etar/commit/529b1b7) Bump androidx.lifecycle:lifecycle-livedata-ktx from 2.9.1 to 2.9.2
  
  Author: dependabot[bot]  
  Date: Fri Aug 1 08:04:31 2025 +0200

- [5ac014f](https://github.com/LineageOS/android_packages_apps_Etar/commit/5ac014f) Bump agp from 8.11.0 to 8.11.1
  
  Author: dependabot[bot]  
  Date: Fri Aug 1 08:04:08 2025 +0200

- [72d13f7](https://github.com/LineageOS/android_packages_apps_Etar/commit/72d13f7) Translated using Weblate (Korean)
  
  Author: 안세훈  
  Date: Fri Aug 1 08:00:51 2025 +0200

- [c3fb32a](https://github.com/LineageOS/android_packages_apps_Etar/commit/c3fb32a) Translated using Weblate (Ukrainian)
  
  Author: Максим Горпиніч  
  Date: Fri Aug 1 08:00:51 2025 +0200

- [85b6063](https://github.com/LineageOS/android_packages_apps_Etar/commit/85b6063) Translated using Weblate (Latvian)
  
  Author: Edgars Andersons  
  Date: Fri Aug 1 08:00:51 2025 +0200

- [ba766fb](https://github.com/LineageOS/android_packages_apps_Etar/commit/ba766fb) Translated using Weblate (French)
  
  Author: Antonin Del Fabbro  
  Date: Fri Aug 1 08:00:51 2025 +0200

- [af6186b](https://github.com/LineageOS/android_packages_apps_Etar/commit/af6186b) Translated using Weblate (French)
  
  Author: Antonin Del Fabbro  
  Date: Fri Aug 1 08:00:51 2025 +0200

- [0198526](https://github.com/LineageOS/android_packages_apps_Etar/commit/0198526) Translated using Weblate (Dutch)
  
  Author: Stephan Paternotte  
  Date: Fri Aug 1 08:00:51 2025 +0200

- [813508a](https://github.com/LineageOS/android_packages_apps_Etar/commit/813508a) Translated using Weblate (Japanese)
  
  Author: Kazushi Hayama  
  Date: Fri Aug 1 08:00:51 2025 +0200

- [0320df9](https://github.com/LineageOS/android_packages_apps_Etar/commit/0320df9) Translated using Weblate (German)
  
  Author: skdubg  
  Date: Fri Aug 1 08:00:51 2025 +0200

- [dea7730](https://github.com/LineageOS/android_packages_apps_Etar/commit/dea7730) Translated using Weblate (Czech)
  
  Author: Fjuro  
  Date: Fri Aug 1 08:00:51 2025 +0200

- [6f2ca62](https://github.com/LineageOS/android_packages_apps_Etar/commit/6f2ca62) Replace Activity with Context so that the function isSystemInDarkTheme() can be called with any context.
  
  Author: Gitsaibot  
  Date: Thu Jul 31 19:47:19 2025 +0200

- [3739be8](https://github.com/LineageOS/android_packages_apps_Etar/commit/3739be8) Improve readability of &quot;guest badge&quot; and solve lint warnings
  
  Author: Gitsaibot  
  Date: Thu Jul 31 19:47:19 2025 +0200

- [d894020](https://github.com/LineageOS/android_packages_apps_Etar/commit/d894020) Replace deprecated onBackPressed() with getOnBackPressedDispatcher()
  
  Author: Gitsaibot  
  Date: Thu Jul 31 19:47:19 2025 +0200

- [7878e3c](https://github.com/LineageOS/android_packages_apps_Etar/commit/7878e3c) Improve guest selection style so that the colors match the different themes. Also added support for vectorDrawables.
  
  Author: Gitsaibot  
  Date: Mon Jul 28 14:11:10 2025 +0200

- [e30b6fe](https://github.com/LineageOS/android_packages_apps_Etar/commit/e30b6fe) Replace baseline vector icon with the corresponding outline version.
  
  Author: Gitsaibot  
  Date: Sun Jul 27 14:06:09 2025 +0200

- [7328e28](https://github.com/LineageOS/android_packages_apps_Etar/commit/7328e28) Revert &quot;Enable automatic per-app language support (Closes: #1497)&quot;
  
  Author: LuK1337  
  Date: Fri Jul 25 23:52:56 2025 +0200

- [be205f6](https://github.com/LineageOS/android_packages_apps_Etar/commit/be205f6) Etar: Hardcode Build.VERSION_CODES.VANILLA_ICE_CREAM to 35
  
  Author: LuK1337  
  Date: Fri Jul 25 23:52:56 2025 +0200

- [d529679](https://github.com/LineageOS/android_packages_apps_Etar/commit/d529679) Etar: Override androidx.startup.InitializationProvider authority name
  
  Author: Michael Bestas  
  Date: Fri Jul 25 23:52:56 2025 +0200

- [d25bdf4](https://github.com/LineageOS/android_packages_apps_Etar/commit/d25bdf4) Etar: Switch back to AOSP application name
  
  Author: Michael Bestas  
  Date: Fri Jul 25 23:52:56 2025 +0200

- [f20d1fb](https://github.com/LineageOS/android_packages_apps_Etar/commit/f20d1fb) Etar: Dynamic icon
  
  Author: Asher Simonds  
  Date: Fri Jul 25 23:52:56 2025 +0200

- [2fef515](https://github.com/LineageOS/android_packages_apps_Etar/commit/2fef515) Etar: Bring in the new icon
  
  Author: Asher Simonds  
  Date: Fri Jul 25 23:52:56 2025 +0200

- [fecffe4](https://github.com/LineageOS/android_packages_apps_Etar/commit/fecffe4) Etar: Add GitHub actions build workflow
  
  Author: LuK1337  
  Date: Fri Jul 25 23:52:56 2025 +0200

- [0a0b7b1](https://github.com/LineageOS/android_packages_apps_Etar/commit/0a0b7b1) Etar: Switch to non-ktx androidx.preference:preference
  
  Author: LuK1337  
  Date: Fri Jul 25 23:52:56 2025 +0200

- [725cc98](https://github.com/LineageOS/android_packages_apps_Etar/commit/725cc98) Etar: Setup AOSP build
  
  Author: LuK1337  
  Date: Fri Jul 25 23:52:55 2025 +0200

- [7c3911c](https://github.com/LineageOS/android_packages_apps_Etar/commit/7c3911c) Drop checkPermission
  
  Author: Jochen Sprickerhof  
  Date: Fri Jul 25 20:55:34 2025 +0200

- [c02baf3](https://github.com/LineageOS/android_packages_apps_Etar/commit/c02baf3) Replace PI_FLAG_IMMUTABLE by it&#x27;s definition
  
  Author: Jochen Sprickerhof  
  Date: Fri Jul 25 20:55:34 2025 +0200

- [d6cb2f8](https://github.com/LineageOS/android_packages_apps_Etar/commit/d6cb2f8) Remove more unneeded functions
  
  Author: Gitsaibot  
  Date: Fri Jul 25 20:32:28 2025 +0200

- [1cfdee9](https://github.com/LineageOS/android_packages_apps_Etar/commit/1cfdee9) Remove unneeded functions
  
  Author: Gitsaibot  
  Date: Fri Jul 25 20:32:28 2025 +0200

- [4ad602b](https://github.com/LineageOS/android_packages_apps_Etar/commit/4ad602b) Remove unnecessary SDK checks
  
  Author: Gitsaibot  
  Date: Fri Jul 25 20:32:28 2025 +0200

- [bb94136](https://github.com/LineageOS/android_packages_apps_Etar/commit/bb94136) Remove PrimaryColor Pref
  
  Author: Gitsaibot  
  Date: Fri Jul 25 20:32:28 2025 +0200

- [a4a8036](https://github.com/LineageOS/android_packages_apps_Etar/commit/a4a8036) Fix &quot;jvmTarget is deprecated&quot;
  
  Author: Gitsaibot  
  Date: Fri Jul 25 20:32:28 2025 +0200

- [e6b4e1e](https://github.com/LineageOS/android_packages_apps_Etar/commit/e6b4e1e) Remove unused import directive
  
  Author: Gitsaibot  
  Date: Fri Jul 25 20:32:28 2025 +0200

- [b428755](https://github.com/LineageOS/android_packages_apps_Etar/commit/b428755) New version 1.0.50
  
  Author: Gitsaibot  
  Date: Wed Jul 23 03:20:21 2025 +0200

- [1777ff2](https://github.com/LineageOS/android_packages_apps_Etar/commit/1777ff2) Translated using Weblate (German)
  
  Author: nautilusx  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [56279f1](https://github.com/LineageOS/android_packages_apps_Etar/commit/56279f1) Translated using Weblate (Slovak)
  
  Author: Milan Šalka  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [e6d7e2a](https://github.com/LineageOS/android_packages_apps_Etar/commit/e6d7e2a) Translated using Weblate (Swedish)
  
  Author: Kristoffer Grundström  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [5eddc53](https://github.com/LineageOS/android_packages_apps_Etar/commit/5eddc53) Translated using Weblate (Swedish)
  
  Author: Kristoffer Grundström  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [4b6373d](https://github.com/LineageOS/android_packages_apps_Etar/commit/4b6373d) Translated using Weblate (Dutch)
  
  Author: Stephan Paternotte  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [e0cff50](https://github.com/LineageOS/android_packages_apps_Etar/commit/e0cff50) Translated using Weblate (Dutch)
  
  Author: Stephan Paternotte  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [76dacec](https://github.com/LineageOS/android_packages_apps_Etar/commit/76dacec) Translated using Weblate (Latvian)
  
  Author: Edgars Andersons  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [d257640](https://github.com/LineageOS/android_packages_apps_Etar/commit/d257640) Translated using Weblate (Italian)
  
  Author: Random  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [8a76d27](https://github.com/LineageOS/android_packages_apps_Etar/commit/8a76d27) Translated using Weblate (Hebrew)
  
  Author: Yaron Shahrabani  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [113691f](https://github.com/LineageOS/android_packages_apps_Etar/commit/113691f) Translated using Weblate (Czech)
  
  Author: Fjuro  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [a5b17c0](https://github.com/LineageOS/android_packages_apps_Etar/commit/a5b17c0) Translated using Weblate (German)
  
  Author: nautilusx  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [26b2e92](https://github.com/LineageOS/android_packages_apps_Etar/commit/26b2e92) Translated using Weblate (Korean)
  
  Author: 안세훈  
  Date: Wed Jul 23 03:08:19 2025 +0200

- [bff4a83](https://github.com/LineageOS/android_packages_apps_Etar/commit/bff4a83) fix datePicker returns incorrect date
  
  Author: Gitsaibot  
  Date: Wed Jul 23 03:04:59 2025 +0200

- [9a3ad0d](https://github.com/LineageOS/android_packages_apps_Etar/commit/9a3ad0d) Set input mode to clock for TimePicker
  
  Author: Gitsaibot  
  Date: Mon Jul 21 18:24:16 2025 +0200

- [9f94053](https://github.com/LineageOS/android_packages_apps_Etar/commit/9f94053) Add missing style attribute for label of the 4th day
  
  Author: Gitsaibot  
  Date: Mon Jul 21 18:23:40 2025 +0200

- [6dcc687](https://github.com/LineageOS/android_packages_apps_Etar/commit/6dcc687) Make key non-nullable in CalendarDataStore
  
  Author: Michael Bestas  
  Date: Mon Jul 21 00:13:38 2025 +0200

- [99d1684](https://github.com/LineageOS/android_packages_apps_Etar/commit/99d1684) Update CircularImageView package name (Closes: #1903)
  
  Author: Jochen Sprickerhof  
  Date: Sat Jul 19 07:48:46 2025 +0200

- [b7e59ff](https://github.com/LineageOS/android_packages_apps_Etar/commit/b7e59ff) Move CircularImageView to Etar source
  
  Author: Jochen Sprickerhof  
  Date: Sat Jul 19 07:46:04 2025 +0200

- [8db2731](https://github.com/LineageOS/android_packages_apps_Etar/commit/8db2731) Restore CircularImageView.java from f0c693139
  
  Author: Jochen Sprickerhof  
  Date: Sat Jul 19 07:44:42 2025 +0200


</details>

<details>
<summary><b>packages/apps/Launcher3</b></summary>

- [9748f62](https://github.com/LineageOS/android_packages_apps_Launcher3/commit/9748f62) Launcher3: Add permission for contextual search
  
  Author: Pranav Vashi  
  Date: Tue Aug 12 20:58:47 2025 +0200

- [55d16d8](https://github.com/LineageOS/android_packages_apps_Launcher3/commit/55d16d8) Launcher3: Make taskbar start aligned in all grid sizes
  
  Author: Michael Bestas  
  Date: Tue Jul 29 14:37:17 2025 +0000


</details>

<details>
<summary><b>packages/apps/SettingsIntelligence</b></summary>

- [cc1a49f](https://github.com/LineageOS/android_packages_apps_SettingsIntelligence/commit/cc1a49f) SettingsIntelligence: Search: Skip showing a few packages
  
  Author: Michael W  
  Date: Thu Jul 31 01:14:56 2025 +0300

- [47fa3d3](https://github.com/LineageOS/android_packages_apps_SettingsIntelligence/commit/47fa3d3) SettingsIntelligence: Regen database on build version change
  
  Author: Luca Stefani  
  Date: Thu Jul 31 01:14:56 2025 +0300

- [8e09c77](https://github.com/LineageOS/android_packages_apps_SettingsIntelligence/commit/8e09c77) SettingsIntelligence: Bring in the new icon
  
  Author: Asher Simonds  
  Date: Thu Jul 31 01:14:52 2025 +0300


</details>

<details>
<summary><b>packages/apps/ThemePicker</b></summary>

- [a4c51d0](https://github.com/LineageOS/android_packages_apps_ThemePicker/commit/a4c51d0) ThemePicker: default to TONAL_SPOT for invalid Styles
  
  Author: Cosmin Tanislav  
  Date: Thu Jul 31 15:25:00 2025 +0300

- [2a30e8d](https://github.com/LineageOS/android_packages_apps_ThemePicker/commit/2a30e8d) ThemePicker: Fix hardcoded launcher package name
  
  Author: basamaryan  
  Date: Thu Jul 31 15:25:00 2025 +0300

- [78101bd](https://github.com/LineageOS/android_packages_apps_ThemePicker/commit/78101bd) ThemePicker: Allow text scroll in options title
  
  Author: Ido Ben-Hur  
  Date: Thu Jul 31 15:25:00 2025 +0300

- [80a03b3](https://github.com/LineageOS/android_packages_apps_ThemePicker/commit/80a03b3) ThemePicker: Use the new material switch to match with settings
  
  Author: Ido Ben-Hur  
  Date: Thu Jul 31 15:25:00 2025 +0300

- [effcdd3](https://github.com/LineageOS/android_packages_apps_ThemePicker/commit/effcdd3) ThemePicker: Many UI / layout consistency fixes &amp; improvements
  
  Author: Ido Ben-Hur  
  Date: Thu Jul 31 15:25:00 2025 +0300

- [7d7505c](https://github.com/LineageOS/android_packages_apps_ThemePicker/commit/7d7505c) ThemePicker: Show our apps in icon previews
  
  Author: Demon000  
  Date: Thu Jul 31 15:25:00 2025 +0300

- [921a622](https://github.com/LineageOS/android_packages_apps_ThemePicker/commit/921a622) ThemePicker: Vertically center the text of customization options
  
  Author: Ido Ben-Hur  
  Date: Thu Jul 31 15:25:00 2025 +0300

- [8d4c0a3](https://github.com/LineageOS/android_packages_apps_ThemePicker/commit/8d4c0a3) ThemePicker: Bring back fonts, icon pack, shape customization
  
  Author: Anay Wadhera  
  Date: Thu Jul 31 15:25:00 2025 +0300

- [877d588](https://github.com/LineageOS/android_packages_apps_ThemePicker/commit/877d588) stub: Import extra color bundles from TQ2A.230305.008.C1
  
  Author: Michael Bestas  
  Date: Thu Jul 31 15:25:00 2025 +0300


</details>

<details>
<summary><b>packages/apps/Twelve</b></summary>

- [397c8ca](https://github.com/LineageOS/android_packages_apps_Twelve/commit/397c8ca) Automatic translation import
  
  Author: LineageOS Infra  
  Date: Fri Aug 1 21:13:55 2025 +0000

- [8b48e37](https://github.com/LineageOS/android_packages_apps_Twelve/commit/8b48e37) Twelve: Fix typo in string name
  
  Author: Inhishonor  
  Date: Fri Aug 1 19:45:36 2025 +0000

- [040bd2d](https://github.com/LineageOS/android_packages_apps_Twelve/commit/040bd2d) Twelve: Let the app handle view intents with genre content URIs
  
  Author: Sebastiano Barezzi  
  Date: Sun Jul 20 18:08:46 2025 +0200

- [5298370](https://github.com/LineageOS/android_packages_apps_Twelve/commit/5298370) Twelve: Don&#x27;t hardcode MediaStore mime types
  
  Author: Sebastiano Barezzi  
  Date: Sun Jul 20 17:46:02 2025 +0200

- [51e1521](https://github.com/LineageOS/android_packages_apps_Twelve/commit/51e1521) Twelve: ProviderSelectorDialogFragment: Highlight current provider
  
  Author: Sebastiano Barezzi  
  Date: Sun Jul 20 14:42:36 2025 +0200

- [2c9e9fa](https://github.com/LineageOS/android_packages_apps_Twelve/commit/2c9e9fa) Twelve: BaseMediaItemView: Implement states
  
  Author: Sebastiano Barezzi  
  Date: Sun Jul 20 14:42:36 2025 +0200

- [9359d9a](https://github.com/LineageOS/android_packages_apps_Twelve/commit/9359d9a) Twelve: ListItem: Implement states, dim support and rounded corners
  
  Author: Sebastiano Barezzi  
  Date: Sun Jul 20 14:42:36 2025 +0200

- [82dce9f](https://github.com/LineageOS/android_packages_apps_Twelve/commit/82dce9f) Twelve: Add missing content description
  
  Author: Sebastiano Barezzi  
  Date: Sun Jul 20 14:42:36 2025 +0200

- [b8c325c](https://github.com/LineageOS/android_packages_apps_Twelve/commit/b8c325c) Twelve: Move KAPT block to the right place
  
  Author: Sebastiano Barezzi  
  Date: Sun Jul 20 14:42:36 2025 +0200

- [10e7cb2](https://github.com/LineageOS/android_packages_apps_Twelve/commit/10e7cb2) Twelve: Random code cleanup
  
  Author: Sebastiano Barezzi  
  Date: Sun Jul 20 14:42:36 2025 +0200

- [1aebdd7](https://github.com/LineageOS/android_packages_apps_Twelve/commit/1aebdd7) Twelve: New now playing stats bottom sheet
  
  Author: Sebastiano Barezzi  
  Date: Sun Jul 20 13:39:53 2025 +0200

- [42fd32a](https://github.com/LineageOS/android_packages_apps_Twelve/commit/42fd32a) Twelve: Remove unused import
  
  Author: Sebastiano Barezzi  
  Date: Sun Jul 20 13:39:53 2025 +0200

- [463325a](https://github.com/LineageOS/android_packages_apps_Twelve/commit/463325a) Twelve: Add Jellyfin suggestions
  
  Author: Timi  
  Date: Sun Jul 20 13:02:16 2025 +0300

- [d465c3c](https://github.com/LineageOS/android_packages_apps_Twelve/commit/d465c3c) Twelve: Trigger onFavoritesChanged on Jellyfin favorite toggle
  
  Author: Timi  
  Date: Fri Jul 18 16:52:02 2025 +0300

- [e4c1a27](https://github.com/LineageOS/android_packages_apps_Twelve/commit/e4c1a27) Twelve: Fix Jellyfin toggle favorite
  
  Author: Timi  
  Date: Fri Jul 18 16:37:25 2025 +0300

- [183f787](https://github.com/LineageOS/android_packages_apps_Twelve/commit/183f787) Twelve: Map Jellyfin favorites uri to playlist
  
  Author: Timi  
  Date: Fri Jul 18 16:24:16 2025 +0300

- [1648ebf](https://github.com/LineageOS/android_packages_apps_Twelve/commit/1648ebf) Twelve: Fix Jellyfin item artist &amp; album uri
  
  Author: Timi  
  Date: Fri Jul 18 12:49:01 2025 +0000


</details>

<details>
<summary><b>tools/extract-utils</b></summary>

- [65b9f3a](https://github.com/LineageOS/android_tools_extract-utils/commit/65b9f3a) extract_utils: sort only groups of blobs
  
  Author: LuK1337  
  Date: Thu Aug 7 08:53:25 2025 +0200


</details>

<details>
<summary><b>vendor/lineage</b></summary>

- [305124a](https://github.com/LineageOS/android_vendor_lineage/commit/305124a) release: Bump Security String to 2025-08-01
  
  Author: Michael Bestas  
  Date: Wed Aug 13 03:31:34 2025 +0000

- [1ab1a74](https://github.com/LineageOS/android_vendor_lineage/commit/1ab1a74) vars: August 2025 Security Update
  
  Author: Michael Bestas  
  Date: Tue Aug 12 19:02:02 2025 +0000

- [a3cc137](https://github.com/LineageOS/android_vendor_lineage/commit/a3cc137) Reapply &quot;lineage: Add framework compatibility matrix for Lineage HALs&quot;
  
  Author: LuK1337  
  Date: Sat Aug 9 11:09:16 2025 +0200

- [69945d6](https://github.com/LineageOS/android_vendor_lineage/commit/69945d6) Update APN settings for Odido/T-Mobile NL
  
  Author: Yannick Binnenweg  
  Date: Mon Aug 4 18:05:15 2025 +0000

- [fd1f593](https://github.com/LineageOS/android_vendor_lineage/commit/fd1f593) build: Make {aosp,clo}remote work when not in the root dir of the repo
  
  Author: LuK1337  
  Date: Wed Jul 30 21:46:20 2025 +0000

- [fa57999](https://github.com/LineageOS/android_vendor_lineage/commit/fa57999) build: Drop VARIANT_DEFCONFIG/SELINUX_DEFCONFIG support
  
  Author: Michael Bestas  
  Date: Wed Jul 30 14:03:05 2025 +0000

- [46fea3f](https://github.com/LineageOS/android_vendor_lineage/commit/46fea3f) build: Drop separate recovery kernel support
  
  Author: Michael Bestas  
  Date: Wed Jul 30 14:03:05 2025 +0000

- [ca679dc](https://github.com/LineageOS/android_vendor_lineage/commit/ca679dc) release: Remove no longer used Pixel flags
  
  Author: Michael Bestas  
  Date: Wed Jul 30 03:07:13 2025 +0300

- [47a3088](https://github.com/LineageOS/android_vendor_lineage/commit/47a3088) apns: Update US Mobile APNs
  
  Author: Alexander Koskovich  
  Date: Tue Jul 29 22:45:19 2025 +0000

- [b3a50f2](https://github.com/LineageOS/android_vendor_lineage/commit/b3a50f2) apns: Add AT&amp;T 5G NSA &amp; SA APNs (310
  
  Author: 410) from att5g[sa]_us-64000000006  
  Date: Alexander Koskovich|Sat Jul 26 19:27:45 2025 +0000

- [0904318](https://github.com/LineageOS/android_vendor_lineage/commit/0904318) Revert &quot;soong: Make mkdir install dir optional&quot;
  
  Author: LuK1337  
  Date: Sat Jul 26 10:51:22 2025 +0200

- [a69dfb1](https://github.com/LineageOS/android_vendor_lineage/commit/a69dfb1) apns-conf: Update carriers from the Philippines
  
  Author: Marc Bourgoin  
  Date: Fri Jul 25 18:22:57 2025 +0000

- [39d7fef](https://github.com/LineageOS/android_vendor_lineage/commit/39d7fef) apns: Update Verizon (311
  
  Author: 480) from verizon_us-64000000022  
  Date: Alexander Koskovich|Fri Jul 25 09:55:14 2025 -0400

- [69dee3f](https://github.com/LineageOS/android_vendor_lineage/commit/69dee3f) apns: Update Xfinity Mobile MVNO (311
  
  Author: 480) from xfinity_us-64000000012  
  Date: Alexander Koskovich|Fri Jul 25 09:55:10 2025 -0400

- [6453756](https://github.com/LineageOS/android_vendor_lineage/commit/6453756) Add mvno_match_data to StraightTalk Verizon
  
  Author: Alexander Koskovich  
  Date: Fri Jul 25 09:55:06 2025 -0400

- [e41ae16](https://github.com/LineageOS/android_vendor_lineage/commit/e41ae16) kernel: Fix building x86 kernel with GCC
  
  Author: Yumi Yukimura  
  Date: Tue Jul 22 20:27:25 2025 +0000

- [c8ecd22](https://github.com/LineageOS/android_vendor_lineage/commit/c8ecd22) kernel: Sign kernel modules only if CONFIG_MODULE_SIG_FORMAT=y
  
  Author: Yumi Yukimura  
  Date: Tue Jul 22 20:27:25 2025 +0000

- [8c65077](https://github.com/LineageOS/android_vendor_lineage/commit/8c65077) kernel: Fix build when device does not set BOARD_SYSTEM_KERNEL_MODULES_LOAD
  
  Author: Yumi Yukimura  
  Date: Tue Jul 22 20:27:25 2025 +0000

- [56ed385](https://github.com/LineageOS/android_vendor_lineage/commit/56ed385) kernel: Support installing kernel modules to system
  
  Author: Yumi Yukimura  
  Date: Tue Jul 22 20:27:25 2025 +0000

- [2bd07a4](https://github.com/LineageOS/android_vendor_lineage/commit/2bd07a4) kernel: Add support for external kernel configs (v2)
  
  Author: Yumi Yukimura  
  Date: Tue Jul 22 20:27:25 2025 +0000

- [751388d](https://github.com/LineageOS/android_vendor_lineage/commit/751388d) kernel: Enhancements to searching DTBs during non-QCOM DTB image generation
  
  Author: Yumi Yukimura  
  Date: Tue Jul 22 20:27:25 2025 +0000

- [8d9c8c0](https://github.com/LineageOS/android_vendor_lineage/commit/8d9c8c0) overlay: tablet: Enable config_canInternalDisplayHostDesktops
  
  Author: Yumi Yukimura  
  Date: Tue Jul 22 20:27:25 2025 +0000

- [205806c](https://github.com/LineageOS/android_vendor_lineage/commit/205806c) overlay: tablet: Update lockscreen widget feature config for 16
  
  Author: Yumi Yukimura  
  Date: Tue Jul 22 20:27:25 2025 +0000

- [089fa84](https://github.com/LineageOS/android_vendor_lineage/commit/089fa84) common: Allow vendors to exclude bp paths
  
  Author: Aaron Kling  
  Date: Tue Jul 22 06:01:23 2025 +0000

- [a356ad6](https://github.com/LineageOS/android_vendor_lineage/commit/a356ad6) build: Move qti_kernel_headers to hardware/qcom-caf/common
  
  Author: Michael Bestas  
  Date: Sun Jul 20 19:42:46 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8450/audio/agm</b></summary>

- [10bbf42](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/10bbf42) agm_ipc_service: Include libagm_headers
  
  Author: Luofan Chen  
  Date: Thu Jul 17 03:31:08 2025 +0300

- [16f8fef](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/16f8fef) ipc: Replace direct pid writes with setting task profiles for audio interfaces
  
  Author: Suren Baghdasaryan  
  Date: Wed Jul 16 22:50:34 2025 +0300

- [825a866](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/825a866) Ignore incompatible-pointer-types and pointer-integer-compare errors
  
  Author: Cosmin Tanislav  
  Date: Wed Jul 16 22:49:22 2025 +0300

- [632d2de](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/632d2de) plugins: tinyalsa: fix build
  
  Author: dianlujitao  
  Date: Wed Jul 16 22:49:22 2025 +0300

- [8330e1f](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/8330e1f) agm: plugins: Fix incompatible function pointer type error
  
  Author: LuK1337  
  Date: Wed Jul 16 22:49:22 2025 +0300

- [0f08bbf](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/0f08bbf) Disable 32 bit variants for 64 bit audio
  
  Author: Arian  
  Date: Wed Jul 16 22:49:22 2025 +0300

- [d87f442](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/d87f442) Convert audio makefiles to blueprint
  
  Author: Arian  
  Date: Wed Jul 16 22:49:20 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8550/audio/agm</b></summary>

- [153175c](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/153175c) agm_ipc_service: Include libagm_headers
  
  Author: Luofan Chen  
  Date: Thu Jul 17 03:30:32 2025 +0300

- [d412b99](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/d412b99) ipc: Replace direct pid writes with setting task profiles for audio interfaces
  
  Author: Suren Baghdasaryan  
  Date: Wed Jul 16 22:51:53 2025 +0300

- [20ad567](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/20ad567) Ignore incompatible-pointer-types and pointer-integer-compare errors
  
  Author: Cosmin Tanislav  
  Date: Wed Jul 16 22:51:53 2025 +0300

- [7598894](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/7598894) plugins: tinyalsa: fix build
  
  Author: dianlujitao  
  Date: Wed Jul 16 22:51:53 2025 +0300

- [0001b72](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/0001b72) agm: plugins: Fix incompatible function pointer type error
  
  Author: LuK1337  
  Date: Wed Jul 16 22:51:53 2025 +0300

- [b670ae0](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/b670ae0) Disable 32 bit variants for 64 bit audio
  
  Author: Arian  
  Date: Wed Jul 16 22:51:53 2025 +0300

- [ac3d351](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/ac3d351) Convert audio makefiles to blueprint
  
  Author: Arian  
  Date: Wed Jul 16 22:51:53 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8650/audio/agm</b></summary>

- [fcb0b23](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/fcb0b23) agm_ipc_service: Include libagm_headers
  
  Author: Luofan Chen  
  Date: Fri Jul 18 15:45:32 2025 +0300

- [f519e5c](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/f519e5c) agm: disable mem logger support
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 15:45:32 2025 +0300

- [b11688a](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/b11688a) ipc: Replace direct pid writes with setting task profiles for audio interfaces
  
  Author: Suren Baghdasaryan  
  Date: Fri Jul 18 15:45:32 2025 +0300

- [fb24bed](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/fb24bed) Ignore incompatible-pointer-types and pointer-integer-compare errors
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 15:45:32 2025 +0300

- [1fd02b3](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/1fd02b3) plugins: tinyalsa: fix build
  
  Author: dianlujitao  
  Date: Fri Jul 18 15:45:32 2025 +0300

- [97f964e](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/97f964e) agm: plugins: Fix incompatible function pointer type error
  
  Author: LuK1337  
  Date: Fri Jul 18 15:45:31 2025 +0300

- [7d8b866](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/7d8b866) Convert audio makefiles to blueprint
  
  Author: Arian  
  Date: Thu Jul 17 01:40:54 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8450/audio/pal</b></summary>

- [45d066e](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/45d066e) ResourceManager: fix activeStreams check
  
  Author: Tommaso Fonda  
  Date: Sat Jul 26 21:31:55 2025 +0000

- [65d0274](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/65d0274) pal: Parse LVACFS microphone feature parameter
  
  Author: pjgowtham  
  Date: Wed Jul 16 22:32:05 2025 +0300

- [dfb5304](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/dfb5304) PayloadBuilder: Fix retrieving KVs with a custom config
  
  Author: Arian  
  Date: Wed Jul 16 22:32:05 2025 +0300

- [aa9e27c](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/aa9e27c) ResourceManager: Add cirrus speaker calibration support
  
  Author: Arian  
  Date: Wed Jul 16 22:32:05 2025 +0300

- [4c28225](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/4c28225) Session: Allow to set initial master gain for stereo streams
  
  Author: Arian  
  Date: Wed Jul 16 22:32:05 2025 +0300

- [5ef0842](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/5ef0842) Session: Correct volume payload size
  
  Author: Arian  
  Date: Wed Jul 16 22:32:05 2025 +0300

- [2c07ccd](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/2c07ccd) PayloadBuilder: Populate key vector for ultrasound RX
  
  Author: Arian  
  Date: Wed Jul 16 22:32:05 2025 +0300

- [3b428f1](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/3b428f1) libar-pal: Allow overriding speaker protection calibration path
  
  Author: Michael Bestas  
  Date: Wed Jul 16 22:32:04 2025 +0300

- [6a933d3](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/6a933d3) pal: Expose more headers under libarpal_headers module
  
  Author: SGCMarkus  
  Date: Wed Jul 16 22:32:04 2025 +0300

- [cdeb723](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/cdeb723) Disable 32 bit variants of audio libraries for 64 bit audio targets
  
  Author: Arian  
  Date: Wed Jul 16 22:32:04 2025 +0300

- [c25190c](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/c25190c) Convert audio makefiles to blueprint
  
  Author: Arian  
  Date: Wed Jul 16 22:32:04 2025 +0300

- [27496d1](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/27496d1) pal: adapt VI structs usage to graphservices definitions
  
  Author: Cosmin Tanislav  
  Date: Wed Jul 16 22:32:04 2025 +0300

- [a5d390c](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/a5d390c) Include generated kernel headers for adsp_sleepmon.h
  
  Author: Cosmin Tanislav  
  Date: Wed Jul 16 22:32:04 2025 +0300

- [62700bd](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/62700bd) pal: Make libcapiv2_headers available
  
  Author: Cosmin Tanislav  
  Date: Wed Jul 16 22:32:02 2025 +0300

- [05b0ef4](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/05b0ef4) Add missing sampling rates
  
  Author: Cosmin Tanislav  
  Date: Wed Jul 16 22:32:02 2025 +0300

- [ca51908](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/ca51908) pal: Make libacdb_headers available
  
  Author: Cosmin Tanislav  
  Date: Wed Jul 16 22:31:59 2025 +0300

- [f585503](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/f585503) pal: Make liblisten_headers available
  
  Author: Albert Tang  
  Date: Wed Jul 16 22:31:57 2025 +0300

- [68e7afd](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/68e7afd) Guard mic occlusion events
  
  Author: Cosmin Tanislav  
  Date: Wed Jul 16 22:13:43 2025 +0300

- [47ec541](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/47ec541) Guard setting of voice calibration key values
  
  Author: Cosmin Tanislav  
  Date: Wed Jul 16 22:13:43 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8550/audio/pal</b></summary>

- [58842c6](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/58842c6) pal: Expose more headers under libarpal_headers module
  
  Author: SGCMarkus  
  Date: Thu Jul 17 18:26:39 2025 +0100

- [18051b9](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/18051b9) Disable 32 bit variants of audio libraries for 64 bit audio targets
  
  Author: Arian  
  Date: Thu Jul 17 18:26:39 2025 +0100

- [f90bff2](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/f90bff2) pal: Add dummy libPeripheralStateUtils shared_lib
  
  Author: Luofan Chen  
  Date: Thu Jul 17 18:26:25 2025 +0100

- [9086e24](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/9086e24) Convert audio makefiles to blueprint
  
  Author: Arian  
  Date: Thu Jul 17 12:39:58 2025 +0300

- [e520f67](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/e520f67) Add mink, peripheralstate and libvui_dmgr headers
  
  Author: anonymix007  
  Date: Thu Jul 17 12:39:58 2025 +0300

- [2ed563d](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/2ed563d) Include generated kernel headers for adsp_sleepmon.h
  
  Author: Cosmin Tanislav  
  Date: Wed Jul 16 22:35:53 2025 +0300

- [2d9dd03](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/2d9dd03) pal: Make libcapiv2_headers available
  
  Author: Cosmin Tanislav  
  Date: Wed Jul 16 22:35:05 2025 +0300

- [76821fd](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/76821fd) Add missing sampling rates
  
  Author: Cosmin Tanislav  
  Date: Wed Jul 16 22:34:50 2025 +0300

- [ee2ca9a](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/ee2ca9a) pal: Make libacdb_headers available
  
  Author: Cosmin Tanislav  
  Date: Wed Jul 16 22:34:47 2025 +0300

- [5ccbecd](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/5ccbecd) pal: Make liblisten_headers available
  
  Author: Albert Tang  
  Date: Wed Jul 16 22:34:42 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8650/audio/pal</b></summary>

- [1233949](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/1233949) vui_interface: Address more compilation errors
  
  Author: Bruno Martins  
  Date: Tue Jul 22 17:46:52 2025 +0530

- [39e0bfc](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/39e0bfc) pal: fix redefinition of MS_PER_SEC / US_PER_SEC
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 21:59:05 2025 +0300

- [a3b23d8](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/a3b23d8) pal: Convert libvui_intf to blueprint
  
  Author: Michael Bestas  
  Date: Fri Jul 18 21:59:02 2025 +0300

- [443caa1](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/443caa1) pal: Make libarvui_intf_headers available
  
  Author: Michael Bestas  
  Date: Fri Jul 18 21:58:59 2025 +0300

- [057ca34](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/057ca34) vui_interface: fix memory leak when deregistering model,
  
  Author: Aiyaz Patel  
  Date: Fri Jul 18 21:58:42 2025 +0300

- [11a55ff](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/11a55ff) pal: change to add vui-interface to pal for sva
  
  Author: Manikantan R  
  Date: Fri Jul 18 16:53:07 2025 +0300

- [bead261](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/bead261) pal: fix usage of typedef without a name
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 16:52:13 2025 +0300

- [70aa147](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/70aa147) pal: Fix compilation errors as part of Android V upgrade
  
  Author: Harika Laveti  
  Date: Fri Jul 18 16:51:59 2025 +0300

- [a505a4e](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/a505a4e) pal: Make libaudiofeaturestats_headers available
  
  Author: Michael Bestas  
  Date: Fri Jul 18 15:47:32 2025 +0300

- [90ba001](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/90ba001) pal: disable mem logger support
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 15:47:32 2025 +0300

- [269c48e](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/269c48e) pal: Expose more headers under libarpal_headers module
  
  Author: SGCMarkus  
  Date: Fri Jul 18 15:47:32 2025 +0300

- [13e3c13](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/13e3c13) pal: Add dummy libPeripheralStateUtils shared_lib
  
  Author: Luofan Chen  
  Date: Fri Jul 18 15:47:32 2025 +0300

- [5609563](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/5609563) Convert audio makefiles to blueprint
  
  Author: Arian  
  Date: Thu Jul 17 12:21:05 2025 +0300

- [cbdbdd3](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/cbdbdd3) Add mink, peripheralstate and libvui_dmgr headers
  
  Author: anonymix007  
  Date: Thu Jul 17 12:21:04 2025 +0300

- [d6fef2b](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/d6fef2b) Include generated kernel headers for adsp_sleepmon.h
  
  Author: Cosmin Tanislav  
  Date: Wed Jul 16 22:55:08 2025 +0300

- [bca042d](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/bca042d) pal: Make libcapiv2_headers available
  
  Author: Cosmin Tanislav  
  Date: Wed Jul 16 22:54:35 2025 +0300

- [e26e82c](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/e26e82c) Add missing sampling rates
  
  Author: Cosmin Tanislav  
  Date: Wed Jul 16 22:54:22 2025 +0300

- [0f0f509](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/0f0f509) pal: Make libacdb_headers available
  
  Author: Cosmin Tanislav  
  Date: Wed Jul 16 22:54:19 2025 +0300

- [7cedecc](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/7cedecc) pal: Make liblisten_headers available
  
  Author: Albert Tang  
  Date: Wed Jul 16 22:54:17 2025 +0300


</details>

<details>
<summary><b>vendor/qcom/opensource/audio-hal/st-hal</b></summary>

- [6a578e4](https://github.com/LineageOS/android_vendor_qcom_opensource_audio-hal_st-hal/commit/6a578e4) Convert sound trigger makefile to blueprint
  
  Author: Michael Bestas  
  Date: Wed Jul 16 13:30:21 2025 +0300


</details>

<details>
<summary><b>vendor/qcom/opensource/audio-hal/st-hal-ar-legacy</b></summary>

- [219a0a3](https://github.com/LineageOS/android_vendor_qcom_opensource_audio-hal_st-hal-ar/commit/219a0a3) sthal-ar: Migrate to legacy specific namespaces
  
  Author: Michael Bestas  
  Date: Sat Jul 19 13:52:03 2025 +0000

- [0ae95ee](https://github.com/LineageOS/android_vendor_qcom_opensource_audio-hal_st-hal-ar/commit/0ae95ee) STHAL: Add null pointer check
  
  Author: Ankit Mishra  
  Date: Wed Jul 16 13:31:13 2025 +0300

- [1c03718](https://github.com/LineageOS/android_vendor_qcom_opensource_audio-hal_st-hal-ar/commit/1c03718) ST-HAL: Update check for stream state in destructor
  
  Author: Ankit Mishra  
  Date: Wed Jul 16 13:31:13 2025 +0300

- [f8bde3d](https://github.com/LineageOS/android_vendor_qcom_opensource_audio-hal_st-hal-ar/commit/f8bde3d) Disable 32 bit variants of audio libraries for 64 bit audio targets
  
  Author: Arian  
  Date: Wed Jul 16 13:31:13 2025 +0300

- [3e4ff53](https://github.com/LineageOS/android_vendor_qcom_opensource_audio-hal_st-hal-ar/commit/3e4ff53) st-hal-ar: Add dependency on libarpal_headers
  
  Author: Bruno Martins  
  Date: Wed Jul 16 13:31:13 2025 +0300

- [bcb251b](https://github.com/LineageOS/android_vendor_qcom_opensource_audio-hal_st-hal-ar/commit/bcb251b) Convert sound trigger makefile to blueprint
  
  Author: Michael Bestas  
  Date: Wed Jul 16 13:31:10 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8450/audio/graphservices</b></summary>

- [75d5e46](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/75d5e46) Add missing speaker protection ch_enable VI and RX structs and constants
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [1d2e822](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/1d2e822) Disable 32 bit variants of audio libraries for 64 bit audio targets
  
  Author: Arian  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [49a735b](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/49a735b) ar_osal: Use /dev/msm_audio_ion since /dev/msm_audio_mem does not exist
  
  Author: anonymix007  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [3d48a45](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/3d48a45) Remove typedef from unnamed enum
  
  Author: dianlujitao  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [1215914](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/1215914) Avoid discarding the packed attribute
  
  Author: dianlujitao  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [68ffcf3](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/68ffcf3) Remove usage of comdef.h
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [b4592ab](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/b4592ab) Allow usage without PD notifiers
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [e0e10ee](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/e0e10ee) Fix incompatible-pointer-types-discards-qualifiers error
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [2815f79](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/2815f79) Ignore address-of-packed-member errors
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 15:27:42 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8550/audio/graphservices</b></summary>

- [1d2e822](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/1d2e822) Disable 32 bit variants of audio libraries for 64 bit audio targets
  
  Author: Arian  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [49a735b](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/49a735b) ar_osal: Use /dev/msm_audio_ion since /dev/msm_audio_mem does not exist
  
  Author: anonymix007  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [3d48a45](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/3d48a45) Remove typedef from unnamed enum
  
  Author: dianlujitao  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [1215914](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/1215914) Avoid discarding the packed attribute
  
  Author: dianlujitao  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [68ffcf3](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/68ffcf3) Remove usage of comdef.h
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [b4592ab](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/b4592ab) Allow usage without PD notifiers
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [e0e10ee](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/e0e10ee) Fix incompatible-pointer-types-discards-qualifiers error
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [2815f79](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/2815f79) Ignore address-of-packed-member errors
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 15:27:42 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8650/audio/graphservices</b></summary>

- [49a735b](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/49a735b) ar_osal: Use /dev/msm_audio_ion since /dev/msm_audio_mem does not exist
  
  Author: anonymix007  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [3d48a45](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/3d48a45) Remove typedef from unnamed enum
  
  Author: dianlujitao  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [1215914](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/1215914) Avoid discarding the packed attribute
  
  Author: dianlujitao  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [68ffcf3](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/68ffcf3) Remove usage of comdef.h
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [b4592ab](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/b4592ab) Allow usage without PD notifiers
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [e0e10ee](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/e0e10ee) Fix incompatible-pointer-types-discards-qualifiers error
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [2815f79](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/2815f79) Ignore address-of-packed-member errors
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 15:27:42 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8750/audio/graphservices</b></summary>

- [49a735b](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/49a735b) ar_osal: Use /dev/msm_audio_ion since /dev/msm_audio_mem does not exist
  
  Author: anonymix007  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [3d48a45](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/3d48a45) Remove typedef from unnamed enum
  
  Author: dianlujitao  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [1215914](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/1215914) Avoid discarding the packed attribute
  
  Author: dianlujitao  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [68ffcf3](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/68ffcf3) Remove usage of comdef.h
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [b4592ab](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/b4592ab) Allow usage without PD notifiers
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [e0e10ee](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/e0e10ee) Fix incompatible-pointer-types-discards-qualifiers error
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 15:27:42 2025 +0300

- [2815f79](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/2815f79) Ignore address-of-packed-member errors
  
  Author: Cosmin Tanislav  
  Date: Fri Jul 18 15:27:42 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8650/data-ipa-cfg-mgr</b></summary>

- [1f3443a](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/1f3443a) ipacm: Address ipacm start failure
  
  Author: dianlujitao  
  Date: Wed Jul 16 15:37:48 2025 +0300

- [e544d94](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/e544d94) ipacm: Get rid of `using namespace std;`
  
  Author: Yumi Yukimura  
  Date: Wed Jul 16 15:37:48 2025 +0300

- [39a24b0](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/39a24b0) ipacm: Remove compilation dependency for in_addr_t on bionic
  
  Author: Praveen Kurapati  
  Date: Wed Jul 16 15:37:47 2025 +0300

- [8ddd477](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/8ddd477) data-ipa-cfg-mgr: Disable all the debugging
  
  Author: Bruno Martins  
  Date: Wed Jul 16 15:37:47 2025 +0300

- [ec2ff2f](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/ec2ff2f) data-ipa-cfg-mgr: Remove verbose cflag
  
  Author: Luca Stefani  
  Date: Wed Jul 16 15:37:47 2025 +0300

- [47ab72d](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/47ab72d) data-ipa-cfg-mgr: Import hardware/qcom-caf/sm8650 namespace
  
  Author: Michael Bestas  
  Date: Wed Jul 16 15:37:47 2025 +0300

- [eb4e9f4](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/eb4e9f4) data-ipa-cfg-mgr: Define soong namespace
  
  Author: razorloves  
  Date: Wed Jul 16 15:34:41 2025 +0300

- [571769e](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/571769e) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Wed Jul 16 15:34:41 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8750/data-ipa-cfg-mgr</b></summary>

- [c7b0cc1](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/c7b0cc1) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Wed Jul 16 16:04:19 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8650/dataipa</b></summary>

- [617ae45](https://github.com/LineageOS/android_vendor_qcom_opensource_dataipa/commit/617ae45) dataipa: Disable all the debugging
  
  Author: Bruno Martins  
  Date: Wed Jul 16 15:40:29 2025 +0300

- [f7ac174](https://github.com/LineageOS/android_vendor_qcom_opensource_dataipa/commit/f7ac174) dataipa: libipanat: Ignore all errors
  
  Author: Bruno Martins  
  Date: Wed Jul 16 15:40:21 2025 +0300

- [b13f675](https://github.com/LineageOS/android_vendor_qcom_opensource_dataipa/commit/b13f675) dataipa: Disable kernel modules and tests
  
  Author: Michael Bestas  
  Date: Wed Jul 16 15:39:40 2025 +0300

- [3b735e1](https://github.com/LineageOS/android_vendor_qcom_opensource_dataipa/commit/3b735e1) Add .gitupstream file
  
  Author: Michael Bestas  
  Date: Wed Jul 16 15:39:40 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8750/dataipa</b></summary>

- [447cdfd](https://github.com/LineageOS/android_vendor_qcom_opensource_dataipa/commit/447cdfd) Add .gitupstream file
  
  Author: Michael Bestas  
  Date: Wed Jul 16 16:05:20 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8750/display/core</b></summary>

- [9faf8c9](https://github.com/LineageOS/android_vendor_qcom_opensource_display-core/commit/9faf8c9) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Wed Jul 16 16:29:50 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8750/display/intf</b></summary>

- [0b8e0b3](https://github.com/LineageOS/android_vendor_qcom_opensource_display-intf/commit/0b8e0b3) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Wed Jul 16 16:36:32 2025 +0300


</details>

<details>
<summary><b>lineage/hudson</b></summary>

- [c38f087](https://github.com/LineageOS/hudson/commit/c38f087) nx659j is back to the game
  
  Author: Wiktor Rudzki  
  Date: Wed Aug 6 18:52:52 2025 +0200

- [25bbe2a](https://github.com/LineageOS/hudson/commit/25bbe2a) hudson: Revive r8q
  
  Author: Atakan  
  Date: Sun Jul 27 15:32:45 2025 +0000

- [48fecb4](https://github.com/LineageOS/hudson/commit/48fecb4) hudson: Add Nothing Phone (2) (Pong)
  
  Author: chandu078  
  Date: Sun Jul 27 11:37:10 2025 +0530

- [96ade60](https://github.com/LineageOS/hudson/commit/96ade60) hudson: Add Galaxy Tab S7 (LTE)
  
  Author: Bruno Martins  
  Date: Wed Jul 23 21:24:45 2025 +0100

- [0815403](https://github.com/LineageOS/hudson/commit/0815403) Akershus Castle is a medieval castle in the Norwegian capital Oslo that was built to protect and provide a royal residence for the city.
  
  Author: Andrey Sprynga  
  Date: Tue Jul 22 01:35:53 2025 +0700

- [634d24a](https://github.com/LineageOS/hudson/commit/634d24a) hudson: Add Motorola Defy 2021 (bathena)
  
  Author: Deivid21  
  Date: Sat Jul 19 15:55:10 2025 +0000


</details>

<details>
<summary><b>lineage/wiki</b></summary>

- [60e568e](https://github.com/LineageOS/lineage_wiki/commit/60e568e) wiki: Update Pong battery tech and models
  
  Author: chandu078  
  Date: Tue Aug 12 09:16:15 2025 +0000

- [5af8d95](https://github.com/LineageOS/lineage_wiki/commit/5af8d95) wiki: filename.zip -&gt; /path/to/zip
  
  Author: LuK1337  
  Date: Fri Aug 8 11:45:21 2025 +0200

- [5b4f098](https://github.com/LineageOS/lineage_wiki/commit/5b4f098) wiki: Revive nx659j
  
  Author: Wiktor Rudzki  
  Date: Wed Aug 6 18:56:04 2025 +0200

- [9fe2afe](https://github.com/LineageOS/lineage_wiki/commit/9fe2afe) wiki: Switch Oxygen Updater download URL from Google Play to GitHub
  
  Author: LuK1337  
  Date: Sat Aug 2 15:56:40 2025 +0200

- [f844c2d](https://github.com/LineageOS/lineage_wiki/commit/f844c2d) wiki: Improve wording and commands in blob extraction
  
  Author: Inhishonor  
  Date: Thu Jul 31 14:50:38 2025 -0400

- [e01bffa](https://github.com/LineageOS/lineage_wiki/commit/e01bffa) wiki: Fix wording in brotli archive extraction
  
  Author: Inhishonor  
  Date: Thu Jul 31 18:48:01 2025 +0000

- [8532bf2](https://github.com/LineageOS/lineage_wiki/commit/8532bf2) wiki: Remove links to OnePlus softwareupgrade page
  
  Author: LuK1337  
  Date: Wed Jul 30 17:31:22 2025 +0200

- [75f7b3d](https://github.com/LineageOS/lineage_wiki/commit/75f7b3d) wiki: Link to the latest payload-dumper-go release
  
  Author: LuK1337  
  Date: Wed Jul 30 17:26:33 2025 +0200

- [b321d04](https://github.com/LineageOS/lineage_wiki/commit/b321d04) wiki: Improve wording of the adb_flash_success tip
  
  Author: Inhishonor  
  Date: Mon Jul 28 17:55:52 2025 -0700

- [69d8033](https://github.com/LineageOS/lineage_wiki/commit/69d8033) wiki: Change formatting of commands in install and upgrade
  
  Author: Inhishonor  
  Date: Mon Jul 28 17:55:45 2025 -0700

- [f93d830](https://github.com/LineageOS/lineage_wiki/commit/f93d830) wiki: devices: Revive r8q
  
  Author: Atakan  
  Date: Sun Jul 27 18:20:06 2025 +0300

- [597c567](https://github.com/LineageOS/lineage_wiki/commit/597c567) wiki: Add `current_branch` validation
  
  Author: LuK1337  
  Date: Sun Jul 27 11:44:17 2025 +0200

- [49ddbc9](https://github.com/LineageOS/lineage_wiki/commit/49ddbc9) wiki: Add Nothing Phone (2)
  
  Author: chandu078  
  Date: Sun Jul 27 09:43:45 2025 +0000

- [ab3acc6](https://github.com/LineageOS/lineage_wiki/commit/ab3acc6) wiki: Sort nuwa&#x27;s peripherals
  
  Author: LuK1337  
  Date: Sun Jul 27 11:24:04 2025 +0200

- [697f827](https://github.com/LineageOS/lineage_wiki/commit/697f827) wiki: Add Galaxy Tab S7 (LTE)
  
  Author: Bruno Martins  
  Date: Thu Jul 24 20:58:07 2025 +0000

- [cc19403](https://github.com/LineageOS/lineage_wiki/commit/cc19403) wiki: devices: Add ZTE Axon 9 Pro (akershus)
  
  Author: Andrey Sprynga  
  Date: Tue Jul 22 13:57:10 2025 +0700

- [7628074](https://github.com/LineageOS/lineage_wiki/commit/7628074) wiki: Add Motorola Defy 2021 (bathena)
  
  Author: Deivid21  
  Date: Sat Jul 19 15:55:00 2025 +0000


</details>

<details>
<summary><b>lineage/mirror</b></summary>

- [357e63f](https://github.com/LineageOS/mirror/commit/357e63f) Updated to 13-Aug-2025 22:01 UTC
  
  Author: Tim Schumacher  
  Date: Thu Aug 14 00:01:31 2025 +0200

- [ad7d32a](https://github.com/LineageOS/mirror/commit/ad7d32a) Updated aosp-minimal to 09-Aug-2025 21:24 UTC
  
  Author: Tim Schumacher  
  Date: Sat Aug 9 23:24:49 2025 +0200

- [86ff047](https://github.com/LineageOS/mirror/commit/86ff047) Updated to 21-Jul-2025 22:01 UTC
  
  Author: Tim Schumacher  
  Date: Tue Jul 22 00:01:31 2025 +0200

- [da0b4f7](https://github.com/LineageOS/mirror/commit/da0b4f7) Updated to 19-Jul-2025 16:08 UTC
  
  Author: Michael Bestas  
  Date: Sat Jul 19 19:08:46 2025 +0300


</details>

<details>
<summary><b>lineage/website</b></summary>

- [cff40b5](https://github.com/LineageOS/www/commit/cff40b5) www: Use `clip-path: border-box` for longevity section
  
  Author: LuK1337  
  Date: Sat Jul 19 12:00:02 2025 +0200

- [c9995a2](https://github.com/LineageOS/www/commit/c9995a2) www: Update mastodon SVG icon
  
  Author: LuK1337  
  Date: Fri Jul 18 22:43:18 2025 +0200


</details>

---

_Auto-generated by GitHub Actions. Displays recent LineageOS source commit activity for development reference._
