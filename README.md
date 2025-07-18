## 📜 LineageOS Source Changes (Last 30 Days)

<details>
<summary><b>android</b></summary>

- [5ff2a5a](https://github.com/LineageOS/android/commit/5ff2a5a) manifest: Remove Android.mk guards for sm8150/sm8250/sm8350
  
  Author: Michael Bestas  
  Date: Sat Jul 12 21:18:12 2025 +0300

- [e868a1e](https://github.com/LineageOS/android/commit/e868a1e) lineage: Update qcom repos for 16
  
  Author: Michael Bestas  
  Date: Sat Jul 5 18:02:19 2025 +0300

- [bba1d1d](https://github.com/LineageOS/android/commit/bba1d1d) manifest: Switch to lineage-23.0 branch
  
  Author: Michael Bestas  
  Date: Sat Jul 5 17:37:51 2025 +0300

- [3e6fccf](https://github.com/LineageOS/android/commit/3e6fccf) lineage: Remove commented out NXP repos
  
  Author: Michael Bestas  
  Date: Sat Jul 5 17:37:51 2025 +0300

- [e3b0948](https://github.com/LineageOS/android/commit/e3b0948) lineage: Track sun repos
  
  Author: Bruno Martins  
  Date: Sat Jul 5 17:28:44 2025 +0300

- [329966a](https://github.com/LineageOS/android/commit/329966a) lineage: Move current sthal-ar and thermal to legacy
  
  Author: Bruno Martins  
  Date: Sat Jul 5 17:28:11 2025 +0300

- [8de3399](https://github.com/LineageOS/android/commit/8de3399) manifest: Track vendor/qcom/opensource/audio
  
  Author: LuK1337  
  Date: Tue Jul 1 20:46:49 2025 +0200

- [7b8958d](https://github.com/LineageOS/android/commit/7b8958d) manifest: Temporarily add Pixel 9a remote
  
  Author: Michael Bestas  
  Date: Thu Jun 26 10:10:40 2025 +0300

- [ecdf4a3](https://github.com/LineageOS/android/commit/ecdf4a3) manifest: Remove deprecated ANT+ repos
  
  Author: Michael Bestas  
  Date: Mon Jun 23 04:32:01 2025 +0300


</details>

<details>
<summary><b>build/make</b></summary>

- [5d2fe16](https://github.com/LineageOS/android_build/commit/5d2fe16) envsetup: Set INLINE_KERNEL_BUILDING based on TARGET_PREBUILT_KERNEL
  
  Author: Aaron Kling  
  Date: Thu Jul 10 09:22:28 2025 +0300

- [2856161](https://github.com/LineageOS/android_build/commit/2856161) envsetup: Set INLINE_KERNEL_BUILDING based on TARGET_NO_KERNEL
  
  Author: Michael Bestas  
  Date: Thu Jul 10 09:22:28 2025 +0300

- [04b91a6](https://github.com/LineageOS/android_build/commit/04b91a6) build/target: Include Lineage platform jar in system server.
  
  Author: Adnan Begovic  
  Date: Thu Jul 10 09:22:28 2025 +0300

- [5c170f5](https://github.com/LineageOS/android_build/commit/5c170f5) Add extra variables to _readonly_late_variables
  
  Author: dianlujitao  
  Date: Thu Jul 10 09:22:28 2025 +0300

- [b3b0ad5](https://github.com/LineageOS/android_build/commit/b3b0ad5) Add roomservice
  
  Author: Koushik Dutta  
  Date: Thu Jul 10 09:22:28 2025 +0300

- [e014b3d](https://github.com/LineageOS/android_build/commit/e014b3d) Allow passing makefile path to enforce-product-packages-exist
  
  Author: Aaron Kling  
  Date: Thu Jul 10 09:22:28 2025 +0300

- [31136e4](https://github.com/LineageOS/android_build/commit/31136e4) build: Include vendor/extra/BoardConfigExtra.mk if available
  
  Author: Steve Kondik  
  Date: Thu Jul 10 09:22:22 2025 +0300

- [375b072](https://github.com/LineageOS/android_build/commit/375b072) build: Add Lineage build support
  
  Author: Luca Stefani  
  Date: Thu Jul 10 09:20:21 2025 +0300

- [2471075](https://github.com/LineageOS/android_build/commit/2471075) No more spam
  
  Author: Chirayu Desai  
  Date: Thu Jul 10 09:19:50 2025 +0300

- [c176e1f](https://github.com/LineageOS/android_build/commit/c176e1f) Source lineage specific envsetup
  
  Author: Michael Bestas  
  Date: Thu Jul 10 09:19:50 2025 +0300

- [2f2692a](https://github.com/LineageOS/android_build/commit/2f2692a) envsetup: export ANDROID_BUILD_TOP earlier
  
  Author: Chirayu Desai  
  Date: Thu Jul 10 09:19:50 2025 +0300


</details>

<details>
<summary><b>build/soong</b></summary>

- [3c38cfe](https://github.com/LineageOS/android_build_soong/commit/3c38cfe) Rust: Use nehalem cpu-target when building with sandybridge arch variant
  
  Author: hmtheboy154  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [29ad702](https://github.com/LineageOS/android_build_soong/commit/29ad702) soong: Treat vendor/lineage-priv/* as release-keys
  
  Author: LuK1337  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [535dc7e](https://github.com/LineageOS/android_build_soong/commit/535dc7e) check_boot_jars: Add NT packages to whitelist
  
  Author: aswin7469  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [3153c86](https://github.com/LineageOS/android_build_soong/commit/3153c86) check_boot_jars: Add oplus packages to whitelist
  
  Author: Bruno Martins  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [868898e](https://github.com/LineageOS/android_build_soong/commit/868898e) check_boot_jars: Add Lineage SDK packages
  
  Author: LuK1337  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [57695ef](https://github.com/LineageOS/android_build_soong/commit/57695ef) check_boot_jars: Add nvidia packages to whitelist
  
  Author: LuK1337  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [ea8cb8b](https://github.com/LineageOS/android_build_soong/commit/ea8cb8b) check_boot_jars: Add IFAA Manager to whitelist
  
  Author: Michael Bestas  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [fabb2d4](https://github.com/LineageOS/android_build_soong/commit/fabb2d4) Add qcom.fmradio and org.codeaurora.internal to allowlist
  
  Author: Scott Lobdell  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [01cf87b](https://github.com/LineageOS/android_build_soong/commit/01cf87b) Conditionally use Unix epoch time for build incremental
  
  Author: Michael Bestas  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [0e4ed11](https://github.com/LineageOS/android_build_soong/commit/0e4ed11) gen_build_prop: Stop overriding ro.build.display.id for non-user builds
  
  Author: basamaryan  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [ec0e98b](https://github.com/LineageOS/android_build_soong/commit/ec0e98b) gen_build_prop: Set ro.lineage.device
  
  Author: Michael Bestas  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [2f370bf](https://github.com/LineageOS/android_build_soong/commit/2f370bf) gen_build_prop: Set ro.minui.default_touch_rotation
  
  Author: Michael Bestas  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [2e0c15f](https://github.com/LineageOS/android_build_soong/commit/2e0c15f) gen_build_prop: Set ro.build.fingerprint
  
  Author: Michael Bestas  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [aff0163](https://github.com/LineageOS/android_build_soong/commit/aff0163) Add support for prop overrides
  
  Author: Luca Stefani  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [98de7f8](https://github.com/LineageOS/android_build_soong/commit/98de7f8) install_symlink: Make symlink target configurable
  
  Author: Luca Stefani  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [a5b351d](https://github.com/LineageOS/android_build_soong/commit/a5b351d) soong: paths: Fix out of tree $OUT
  
  Author: Cosmin Tanislav  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [25aa912](https://github.com/LineageOS/android_build_soong/commit/25aa912) soong: Add equivalent for LOCAL_EXPORT_CFLAGS
  
  Author: Alessandro Astone  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [a69c159](https://github.com/LineageOS/android_build_soong/commit/a69c159) sandbox_linux: set CCACHE_DIR as a writable path
  
  Author: daniml3  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [8736cf0](https://github.com/LineageOS/android_build_soong/commit/8736cf0) Add Init_rc to Product_variables.Eng
  
  Author: dianlujitao  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [e736b51](https://github.com/LineageOS/android_build_soong/commit/e736b51) Add exported-to-kati namespaces to root namespace
  
  Author: LuK1337  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [a0310f9](https://github.com/LineageOS/android_build_soong/commit/a0310f9) Support prebuilt_kernel_headers
  
  Author: Aaron Kling  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [0d23c01](https://github.com/LineageOS/android_build_soong/commit/0d23c01) Replace {device,qti}_kernel_headers only when building inline
  
  Author: Chirayu Desai  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [3eaf137](https://github.com/LineageOS/android_build_soong/commit/3eaf137) Replace qti_kernel_headers with generated_kernel_headers
  
  Author: Nolen Johnson  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [f8da489](https://github.com/LineageOS/android_build_soong/commit/f8da489) Replace device_kernel_headers with generated_kernel_headers
  
  Author: Chirayu Desai  
  Date: Wed Jul 9 18:48:09 2025 +0300

- [a24154f](https://github.com/LineageOS/android_build_soong/commit/a24154f) soong: Add PathForSourceRelaxed
  
  Author: Sam Mortimer  
  Date: Wed Jul 9 17:51:20 2025 +0300

- [77cf41c](https://github.com/LineageOS/android_build_soong/commit/77cf41c) soong: Squash of lineage-sdk bringup commits
  
  Author: Rashed Abdel-Tawab  
  Date: Wed Jul 9 17:51:20 2025 +0300

- [b1ab9a8](https://github.com/LineageOS/android_build_soong/commit/b1ab9a8) Make soong-shared public
  
  Author: Michael Bestas  
  Date: Wed Jul 9 17:51:20 2025 +0300


</details>

<details>
<summary><b>device/lineage/sepolicy</b></summary>

- [5b40e27](https://github.com/LineageOS/android_device_lineage_sepolicy/commit/5b40e27) common: Remove Touch HIDL rules
  
  Author: Bruno Martins  
  Date: Tue Jun 24 00:43:26 2025 +0100

- [e0e358b](https://github.com/LineageOS/android_device_lineage_sepolicy/commit/e0e358b) Use hal_attribute_hwservice and hal_attribute_service when possible
  
  Author: Bruno Martins  
  Date: Tue Jun 24 00:43:25 2025 +0100


</details>

<details>
<summary><b>device/qcom/sepolicy</b></summary>

- [7556ede](https://github.com/LineageOS/android_device_qcom_sepolicy/commit/7556ede) generic: Don&#x27;t dontaudit vendor_persist_camera_prop read denials
  
  Author: Arian  
  Date: Thu Jul 3 09:55:37 2025 +0300

- [8a125d6](https://github.com/LineageOS/android_device_qcom_sepolicy/commit/8a125d6) sepolicy: Unlabel aux camera whitelist prop
  
  Author: dianlujitao  
  Date: Thu Jul 3 09:55:02 2025 +0300

- [2af8ac0](https://github.com/LineageOS/android_device_qcom_sepolicy/commit/2af8ac0) sepolicy: Remove QCOM guards
  
  Author: Pig  
  Date: Thu Jul 3 09:55:02 2025 +0300

- [f890d65](https://github.com/LineageOS/android_device_qcom_sepolicy/commit/f890d65) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Thu Jul 3 09:55:02 2025 +0300

- [0c09ef4](https://github.com/LineageOS/android_device_qcom_sepolicy/commit/0c09ef4) QESDK: Removing until_board_api macro
  
  Author: Rishabh Jindal  
  Date: Tue Jun 24 23:21:35 2025 -0700


</details>

<details>
<summary><b>device/qcom/sepolicy_vndr/legacy-um</b></summary>

- [2b65a8c](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/2b65a8c) sepolicy_vndr: lahaina: Label some more wakeup nodes
  
  Author: Michael Bestas  
  Date: Mon Jul 7 10:50:02 2025 +0000

- [fcfeeec](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/fcfeeec) sepolicy_vndr: kona: Label additional nodes
  
  Author: Nolen Johnson  
  Date: Mon Jul 7 10:50:02 2025 +0000

- [b133fbc](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/b133fbc) sepolicy_vndr: Fix extcon nodes
  
  Author: Michael Bestas  
  Date: Mon Jul 7 10:50:02 2025 +0000

- [f3dbdc1](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/f3dbdc1) sepolicy_vndr: Fix wakeup nodes
  
  Author: Michael Bestas  
  Date: Mon Jul 7 10:50:02 2025 +0000

- [71c0560](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/71c0560) sepolicy: bengal: Label an additional UFS discard_max_bytes node
  
  Author: Nolen Johnson  
  Date: Wed Jul 2 03:01:25 2025 +0000

- [2f6e6b7](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/2f6e6b7) sepolicy_vndr: lito: Fix wakeup nodes
  
  Author: basamaryan  
  Date: Mon Jun 30 19:38:33 2025 +0000

- [59081ae](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/59081ae) legacy-um: lahaina: Label additional UFS node
  
  Author: Nolen Johnson  
  Date: Sat Jun 28 13:12:16 2025 -0400


</details>

<details>
<summary><b>device/qcom/sepolicy_vndr/sm8750</b></summary>

- [a424b15](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/a424b15) qva: Label snxxx AIDL service
  
  Author: Bruno Martins  
  Date: Fri Jul 4 02:53:32 2025 +0100

- [623a938](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/623a938) sepolicy_vndr: Switch to BOARD_VENDOR_SEPOLICY_DIRS
  
  Author: Aayush Gupta  
  Date: Fri Jul 4 01:00:46 2025 +0100

- [07c0183](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/07c0183) sepolicy: Update paths for new repository location
  
  Author: Michael Bestas  
  Date: Fri Jul 4 01:00:46 2025 +0100

- [7283ae5](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/7283ae5) sepolicy_vndr: Remove QCOM guards
  
  Author: Pig  
  Date: Fri Jul 4 01:00:46 2025 +0100

- [a6fce63](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/a6fce63) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Fri Jul 4 01:00:46 2025 +0100

- [9495e35](https://github.com/LineageOS/android_device_qcom_sepolicy_vndr/commit/9495e35) Merge 9f6826fd8461a2ac25a4781760a3da349417c3d0 on remote branch
  
  Author: Linux Build Service Account  
  Date: Thu Jun 19 13:19:01 2025 -0700


</details>

<details>
<summary><b>external/bash</b></summary>

- [1094f16](https://github.com/LineageOS/android_external_bash/commit/1094f16) bash: Compile with c17 for legacy K&amp;R compatibility
  
  Author: Thomas Turner  
  Date: Tue Jun 24 22:26:12 2025 +0000

- [9c4eca8](https://github.com/LineageOS/android_external_bash/commit/9c4eca8) bash: Regenerate headers and source files
  
  Author: LuK1337  
  Date: Mon Jun 23 13:09:33 2025 +0200

- [56a7bfe](https://github.com/LineageOS/android_external_bash/commit/56a7bfe) Merge tag &#x27;bash-5.2&#x27; of https://git.savannah.gnu.org/git/bash into lineage-22.2
  
  Author: LuK1337  
  Date: Mon Jun 23 08:32:42 2025 +0200


</details>

<details>
<summary><b>external/chromium-webview/patches</b></summary>

- [9cc3432](https://github.com/LineageOS/android_external_chromium-webview_patches/commit/9cc3432) Update Chromium Webview to 138.0.7204.63
  
  Author: Kevin F. Haggerty  
  Date: Sun Jul 6 07:38:28 2025 -0600


</details>

<details>
<summary><b>external/chromium-webview/prebuilt/arm</b></summary>

- [b263912](https://github.com/LineageOS/android_external_chromium-webview_prebuilt_arm/commit/b263912) Update Chromium Webview arm to 138.0.7204.63
  
  Author: Kevin F. Haggerty  
  Date: Mon Jul 7 05:43:26 2025 -0600


</details>

<details>
<summary><b>external/chromium-webview/prebuilt/arm64</b></summary>

- [f6f994f](https://github.com/LineageOS/android_external_chromium-webview_prebuilt_arm64/commit/f6f994f) Update Chromium Webview arm64 to 138.0.7204.63
  
  Author: Kevin F. Haggerty  
  Date: Mon Jul 7 05:43:27 2025 -0600


</details>

<details>
<summary><b>external/chromium-webview/prebuilt/x86</b></summary>

- [fff97d5](https://github.com/LineageOS/android_external_chromium-webview_prebuilt_x86/commit/fff97d5) Update Chromium Webview x86 to 138.0.7204.63
  
  Author: Kevin F. Haggerty  
  Date: Mon Jul 7 05:43:28 2025 -0600


</details>

<details>
<summary><b>external/chromium-webview/prebuilt/x86_64</b></summary>

- [248528f](https://github.com/LineageOS/android_external_chromium-webview_prebuilt_x86_64/commit/248528f) Update Chromium Webview x86_64 to 138.0.7204.63
  
  Author: Kevin F. Haggerty  
  Date: Mon Jul 7 05:43:29 2025 -0600


</details>

<details>
<summary><b>external/e2fsprogs</b></summary>

- [91e9b8b](https://github.com/LineageOS/android_external_e2fsprogs/commit/91e9b8b) Mark e2fsck/resize2fs/tune2fs as `recovery_available`
  
  Author: Michael Bestas  
  Date: Sun Jun 22 09:27:12 2025 +0300


</details>

<details>
<summary><b>external/exfatprogs</b></summary>

- [f2640cf](https://github.com/LineageOS/android_external_exfatprogs/commit/f2640cf) Merge tag &#x27;1.2.9&#x27; of https://github.com/exfatprogs/exfatprogs into lineage-22.2
  
  Author: Michael Bestas  
  Date: Mon Jun 23 04:13:48 2025 +0300


</details>

<details>
<summary><b>external/gptfdisk</b></summary>

- [78e852b](https://github.com/LineageOS/android_external_gptfdisk/commit/78e852b) gptfdisk: Make libsgdisk visible to libvolume_manager
  
  Author: Michael Bestas  
  Date: Sun Jun 22 09:18:33 2025 +0300

- [aabb0c7](https://github.com/LineageOS/android_external_gptfdisk/commit/aabb0c7) sgdisk: Make sgdisk recovery_available
  
  Author: Nolen Johnson  
  Date: Sun Jun 22 09:18:33 2025 +0300

- [115f731](https://github.com/LineageOS/android_external_gptfdisk/commit/115f731) gptfdisk: include gptcl.h after sgdisk.h
  
  Author: Tom Marshall  
  Date: Sun Jun 22 09:18:33 2025 +0300

- [9e5fb02](https://github.com/LineageOS/android_external_gptfdisk/commit/9e5fb02) gptfdisk: Provide sgdisk_read for direct reads of the partition table
  
  Author: Tom Marshall  
  Date: Sun Jun 22 09:18:31 2025 +0300

- [3c3c156](https://github.com/LineageOS/android_external_gptfdisk/commit/3c3c156) gptfdisk: Build lib for recovery
  
  Author: Tom Marshall  
  Date: Sun Jun 22 09:17:55 2025 +0300


</details>

<details>
<summary><b>external/htop</b></summary>

- [ff411eb](https://github.com/LineageOS/android_external_htop/commit/ff411eb) htop: Update srcs[], shared_libs[] and config.h
  
  Author: LuK1337  
  Date: Mon Jun 23 00:11:15 2025 +0200

- [67a9913](https://github.com/LineageOS/android_external_htop/commit/67a9913) Merge tag &#x27;3.4.1&#x27; of https://github.com/htop-dev/htop into lineage-22.2
  
  Author: LuK1337  
  Date: Sun Jun 22 23:31:48 2025 +0200


</details>

<details>
<summary><b>external/libncurses</b></summary>

- [cf8d1a3](https://github.com/LineageOS/android_external_libncurses/commit/cf8d1a3) Partially Reapply &quot;libncurses: Add recovery variant&quot;
  
  Author: Yumi Yukimura  
  Date: Sun Jul 6 06:25:09 2025 +0800

- [c0109e6](https://github.com/LineageOS/android_external_libncurses/commit/c0109e6) Update libncurses cflags
  
  Author: LuK1337  
  Date: Sun Jun 22 23:17:51 2025 +0200

- [2a03fa1](https://github.com/LineageOS/android_external_libncurses/commit/2a03fa1) Regenerate headers and source files
  
  Author: LuK1337  
  Date: Sun Jun 22 22:35:33 2025 +0200

- [a2fcb14](https://github.com/LineageOS/android_external_libncurses/commit/a2fcb14) Import https://ftp.gnu.org/pub/gnu/ncurses/ncurses-6.5.tar.gz
  
  Author: LuK1337  
  Date: Sun Jun 22 21:31:35 2025 +0200

- [2f33558](https://github.com/LineageOS/android_external_libncurses/commit/2f33558) Import https://ftp.gnu.org/pub/gnu/ncurses/ncurses-6.4.tar.gz
  
  Author: LuK1337  
  Date: Sun Jun 22 21:31:31 2025 +0200

- [579c9af](https://github.com/LineageOS/android_external_libncurses/commit/579c9af) Import https://ftp.gnu.org/pub/gnu/ncurses/ncurses-6.3.tar.gz
  
  Author: LuK1337  
  Date: Sun Jun 22 21:31:26 2025 +0200


</details>

<details>
<summary><b>external/nano</b></summary>

- [690d0ae](https://github.com/LineageOS/android_external_nano/commit/690d0ae) nano: Regenerate config.h
  
  Author: LuK1337  
  Date: Thu Jun 26 09:21:46 2025 +0200

- [6aeab77](https://github.com/LineageOS/android_external_nano/commit/6aeab77) Merge tag &#x27;v8.5&#x27; of git://git.git.savannah.gnu.org/nano into lineage-22.2
  
  Author: LuK1337  
  Date: Thu Jun 26 09:00:35 2025 +0200


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
<summary><b>external/rsync</b></summary>

- [6a2e628](https://github.com/LineageOS/android_external_rsync/commit/6a2e628) rsync: Compile with c17 for legacy K&amp;R compatibility
  
  Author: Thomas Turner  
  Date: Mon Jun 23 16:37:38 2025 +0200

- [e4e120f](https://github.com/LineageOS/android_external_rsync/commit/e4e120f) rsync: Regenerate srcs[] and config.h
  
  Author: LuK1337  
  Date: Mon Jun 23 16:37:38 2025 +0200

- [735371e](https://github.com/LineageOS/android_external_rsync/commit/735371e) Merge tag &#x27;v3.4.1&#x27; of https://github.com/RsyncProject/rsync into lineage-22.2
  
  Author: LuK1337  
  Date: Mon Jun 23 16:04:06 2025 +0200


</details>

<details>
<summary><b>external/unrar</b></summary>

- [5c1331d](https://github.com/LineageOS/android_external_unrar/commit/5c1331d) unrar: Update srcs[]
  
  Author: LuK1337  
  Date: Mon Jun 23 18:17:01 2025 +0200

- [76a253c](https://github.com/LineageOS/android_external_unrar/commit/76a253c) Merge https://github.com/pmachapman/unrar into lineage-22.2
  
  Author: LuK1337  
  Date: Mon Jun 23 18:09:30 2025 +0200


</details>

<details>
<summary><b>external/vim</b></summary>

- [0b9e59e](https://github.com/LineageOS/android_external_vim/commit/0b9e59e) vim: Remove src/auto/config.mk
  
  Author: LuK1337  
  Date: Mon Jun 23 01:25:18 2025 +0200

- [38ced84](https://github.com/LineageOS/android_external_vim/commit/38ced84) vim: Update srcs[] and config.h
  
  Author: LuK1337  
  Date: Mon Jun 23 01:23:52 2025 +0200

- [ae414d4](https://github.com/LineageOS/android_external_vim/commit/ae414d4) Merge tag &#x27;v9.1.1475&#x27; of https://github.com/vim/vim into lineage-22.2
  
  Author: LuK1337  
  Date: Mon Jun 23 00:18:21 2025 +0200

- [cd68f21](https://github.com/LineageOS/android_external_vim/commit/cd68f21) patch 9.1.1475: completion: regression when &quot;nearest&quot; in &#x27;completeopt&#x27;
  
  Author: Girish Palya  
  Date: Sun Jun 22 20:23:54 2025 +0200

- [1cbe3e8](https://github.com/LineageOS/android_external_vim/commit/1cbe3e8) runtime(comment): add &lt;Plug&gt;-mappings
  
  Author: Mark Woods  
  Date: Sun Jun 22 20:20:34 2025 +0200

- [c877057](https://github.com/LineageOS/android_external_vim/commit/c877057) runtime(openPlugin): add &lt;Plug&gt;-mappings
  
  Author: Mark Woods  
  Date: Sun Jun 22 20:20:23 2025 +0200

- [46b0260](https://github.com/LineageOS/android_external_vim/commit/46b0260) patch 9.1.1474: missing out-of-memory check in mark.c
  
  Author: John Marriott  
  Date: Sun Jun 22 19:44:27 2025 +0200

- [8d9d2b2](https://github.com/LineageOS/android_external_vim/commit/8d9d2b2) runtime(tutor): Make all tutor files utf-8 only
  
  Author: Damien Lejay  
  Date: Sun Jun 22 19:42:43 2025 +0200

- [dcff497](https://github.com/LineageOS/android_external_vim/commit/dcff497) runtime(vim): Update base-syntax, match bare mark ranges
  
  Author: Doug Kearns  
  Date: Sun Jun 22 18:47:49 2025 +0200

- [99b9847](https://github.com/LineageOS/android_external_vim/commit/99b9847) runtime(vim): Update base-syntax, fix Vim9 :import expression comment handling
  
  Author: Doug Kearns  
  Date: Fri Jun 20 18:59:21 2025 +0200

- [d75ab0c](https://github.com/LineageOS/android_external_vim/commit/d75ab0c) patch 9.1.1473: inconsistent range arg for :diffget/diffput
  
  Author: Yee Cheng Chin  
  Date: Fri Jun 20 18:44:18 2025 +0200

- [476b65e](https://github.com/LineageOS/android_external_vim/commit/476b65e) runtime(doc): mention using &lt;script&gt; instead of &lt;sfile&gt; in :autocmd
  
  Author: zeertzjq  
  Date: Thu Jun 19 19:40:51 2025 +0200

- [c50f4d0](https://github.com/LineageOS/android_external_vim/commit/c50f4d0) patch 9.1.1472: if_python: PySequence_Fast_{GET_SIZE,GET_ITEM} removed
  
  Author: Zdenek Dohnal  
  Date: Thu Jun 19 19:35:32 2025 +0200


</details>

<details>
<summary><b>hardware/google/pixel-sepolicy</b></summary>

- [7c1888f](https://github.com/LineageOS/android_hardware_google_pixel-sepolicy/commit/7c1888f) Add missing pixelstats sepolicy
  
  Author: Michael Bestas  
  Date: Mon Jun 23 22:44:50 2025 +0300


</details>

<details>
<summary><b>hardware/lineage/compat</b></summary>

- [8a4285c](https://github.com/LineageOS/android_hardware_lineage_compat/commit/8a4285c) libwfdservice: Update for 16
  
  Author: basamaryan  
  Date: Sun Jul 6 12:23:15 2025 +0300

- [17bd779](https://github.com/LineageOS/android_hardware_lineage_compat/commit/17bd779) libgui: Add virtual destructor for Transaction
  
  Author: basamaryan  
  Date: Sun Jul 6 12:23:15 2025 +0300

- [0f7efba](https://github.com/LineageOS/android_hardware_lineage_compat/commit/0f7efba) libgui: Update createVirtualDisplay symbol for Android 25Q2
  
  Author: Skyblueborb  
  Date: Sun Jul 6 12:23:15 2025 +0300

- [8ea1fee](https://github.com/LineageOS/android_hardware_lineage_compat/commit/8ea1fee) libbinder_shim: Expose some more symbols
  
  Author: Michael Bestas  
  Date: Sun Jul 6 12:23:15 2025 +0300

- [6cc7892](https://github.com/LineageOS/android_hardware_lineage_compat/commit/6cc7892) compat: Run bpfix
  
  Author: basamaryan  
  Date: Sat Jun 28 23:55:32 2025 +0100

- [5e88271](https://github.com/LineageOS/android_hardware_lineage_compat/commit/5e88271) compat: Rework libgui shim
  
  Author: LuK1337  
  Date: Sat Jun 21 20:28:15 2025 +0200


</details>

<details>
<summary><b>hardware/lineage/interfaces</b></summary>

- [ba3ed41](https://github.com/LineageOS/android_hardware_lineage_interfaces/commit/ba3ed41) aidl: light: Scan for backlight devices
  
  Author: Yumi Yukimura  
  Date: Sat Jul 12 19:01:08 2025 +0300

- [69174b2](https://github.com/LineageOS/android_hardware_lineage_interfaces/commit/69174b2) aidl: light: Add LEDs with &quot;:status&quot; suffix
  
  Author: Yumi Yukimura  
  Date: Sat Jul 12 19:01:08 2025 +0300

- [0a60f17](https://github.com/LineageOS/android_hardware_lineage_interfaces/commit/0a60f17) touch: Sunset HIDL
  
  Author: Bruno Martins  
  Date: Mon Jun 23 20:54:51 2025 +0000


</details>

<details>
<summary><b>hardware/qcom-caf/common</b></summary>

- [b5edacb](https://github.com/LineageOS/android_hardware_qcom-caf_common/commit/b5edacb) qcom: Include additional wlan soong namespace
  
  Author: Michael Bestas  
  Date: Sat Jul 5 17:12:11 2025 +0300

- [945ea1d](https://github.com/LineageOS/android_hardware_qcom-caf_common/commit/945ea1d) qcom: Update thermal HAL namespace selection
  
  Author: Michael Bestas  
  Date: Sat Jul 5 15:04:58 2025 +0100

- [7f93034](https://github.com/LineageOS/android_hardware_qcom-caf_common/commit/7f93034) common: add support for sun platform
  
  Author: dianlujitao  
  Date: Sat Jul 5 15:03:54 2025 +0100

- [88e8a17](https://github.com/LineageOS/android_hardware_qcom-caf_common/commit/88e8a17) common: Add compatibility matrix for AIDL-only devices
  
  Author: dianlujitao  
  Date: Mon Jun 30 23:32:26 2025 +0000

- [5e3ca6a](https://github.com/LineageOS/android_hardware_qcom-caf_common/commit/5e3ca6a) rfs: Add MDM and MSM OIS symlinks
  
  Author: Bruno Martins  
  Date: Tue Jul 1 00:04:23 2025 +0100


</details>

<details>
<summary><b>hardware/qcom-caf/sm8150/audio</b></summary>

- [d1ae1d8](https://github.com/LineageOS/android_hardware_qcom_audio/commit/d1ae1d8) hal: Convert audio extensions to blueprint
  
  Author: Michael Bestas  
  Date: Thu Jul 3 10:38:03 2025 +0300

- [0ab2e99](https://github.com/LineageOS/android_hardware_qcom_audio/commit/0ab2e99) hal: Convert primary HAL to blueprint
  
  Author: Michael Bestas  
  Date: Thu Jul 3 10:38:03 2025 +0300

- [a2635f7](https://github.com/LineageOS/android_hardware_qcom_audio/commit/a2635f7) hal: Remove unused libmaxxaudio extension
  
  Author: Michael Bestas  
  Date: Thu Jul 3 10:38:03 2025 +0300

- [3524d26](https://github.com/LineageOS/android_hardware_qcom_audio/commit/3524d26) hal: Remove feature manager leftovers
  
  Author: Michael Bestas  
  Date: Thu Jul 3 10:38:03 2025 +0300

- [2e4850a](https://github.com/LineageOS/android_hardware_qcom_audio/commit/2e4850a) audio: Remove all unsupported platforms &amp; flags
  
  Author: Michael Bestas  
  Date: Thu Jul 3 10:38:03 2025 +0300

- [73449d5](https://github.com/LineageOS/android_hardware_qcom_audio/commit/73449d5) hal: audio_extn: Add argument to pthread routines
  
  Author: danielml  
  Date: Wed Jun 25 20:13:52 2025 +0200


</details>

<details>
<summary><b>hardware/qcom-caf/sm8250/audio</b></summary>

- [da531fc](https://github.com/LineageOS/android_hardware_qcom_audio/commit/da531fc) hal: Convert audio extensions to blueprint
  
  Author: Michael Bestas  
  Date: Thu Jul 3 10:38:17 2025 +0300

- [ddcba87](https://github.com/LineageOS/android_hardware_qcom_audio/commit/ddcba87) hal: Convert primary HAL to blueprint
  
  Author: Michael Bestas  
  Date: Thu Jul 3 10:38:17 2025 +0300

- [1b41703](https://github.com/LineageOS/android_hardware_qcom_audio/commit/1b41703) hal: Remove unused libmaxxaudio extension
  
  Author: Michael Bestas  
  Date: Thu Jul 3 10:38:17 2025 +0300

- [1e237e4](https://github.com/LineageOS/android_hardware_qcom_audio/commit/1e237e4) hal: Remove feature manager leftovers
  
  Author: Michael Bestas  
  Date: Thu Jul 3 10:38:17 2025 +0300

- [963f203](https://github.com/LineageOS/android_hardware_qcom_audio/commit/963f203) audio: Remove all unsupported platforms &amp; flags
  
  Author: Michael Bestas  
  Date: Thu Jul 3 10:38:17 2025 +0300

- [e408116](https://github.com/LineageOS/android_hardware_qcom_audio/commit/e408116) hal: audio_extn: Add argument to pthread routines
  
  Author: danielml  
  Date: Tue Jul 1 00:59:44 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8350/audio</b></summary>

- [4667d22](https://github.com/LineageOS/android_hardware_qcom_audio/commit/4667d22) hal: Convert audio extensions to blueprint
  
  Author: Michael Bestas  
  Date: Thu Jul 3 10:38:26 2025 +0300

- [aadba09](https://github.com/LineageOS/android_hardware_qcom_audio/commit/aadba09) hal: Convert primary HAL to blueprint
  
  Author: Michael Bestas  
  Date: Thu Jul 3 10:38:26 2025 +0300

- [21ffff9](https://github.com/LineageOS/android_hardware_qcom_audio/commit/21ffff9) hal: Remove unused libmaxxaudio extension
  
  Author: Michael Bestas  
  Date: Thu Jul 3 10:38:26 2025 +0300

- [2aa790a](https://github.com/LineageOS/android_hardware_qcom_audio/commit/2aa790a) hal: Remove feature manager leftovers
  
  Author: Michael Bestas  
  Date: Thu Jul 3 10:38:26 2025 +0300

- [07aa306](https://github.com/LineageOS/android_hardware_qcom_audio/commit/07aa306) audio: Remove all unsupported platforms &amp; flags
  
  Author: Michael Bestas  
  Date: Thu Jul 3 10:38:26 2025 +0300

- [9e24e3a](https://github.com/LineageOS/android_hardware_qcom_audio/commit/9e24e3a) hal: audio_extn: Add argument to pthread routines
  
  Author: danielml  
  Date: Mon Jun 30 15:13:53 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8450/audio/primary-hal</b></summary>

- [00d2f8f](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/00d2f8f) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Fri Jul 11 14:13:20 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8550/audio/primary-hal</b></summary>

- [0d32b2c](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/0d32b2c) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Fri Jul 11 14:10:21 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8650/audio/primary-hal</b></summary>

- [caffc2a](https://github.com/LineageOS/android_hardware_qcom_audio-ar/commit/caffc2a) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Sun Jul 13 19:28:20 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/bootctrl</b></summary>

- [4f73a95](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/4f73a95) gpt-utils: fsync after block device writes
  
  Author: Akilesh Kailash  
  Date: Thu Jul 10 08:48:47 2025 +0300

- [4b0a3c5](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/4b0a3c5) bootctrl: don&#x27;t assume both partition&#x27;s slots are on the same disk
  
  Author: Dan Pasanen  
  Date: Thu Jul 10 08:48:47 2025 +0300

- [52e9483](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/52e9483) gpt-utils: Add OTA support for HTC partitions
  
  Author: Nolen Johnson  
  Date: Thu Jul 10 08:48:47 2025 +0300

- [2afc9b6](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/2afc9b6) gpt-utils: Add OTA support for LGE partitions
  
  Author: Nolen Johnson  
  Date: Thu Jul 10 08:48:47 2025 +0300

- [6f37662](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/6f37662) gpt-utils: Add OTA support for legacy Motorola partitions
  
  Author: Nolen Johnson  
  Date: Thu Jul 10 08:48:47 2025 +0300

- [c8f07ef](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/c8f07ef) gpt-utils: skip swapping xbl_config slots
  
  Author: Cosmin Tanislav  
  Date: Thu Jul 10 08:48:47 2025 +0300

- [5d6fa89](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/5d6fa89) bootctrl/gpt-utils: Check for full partiton name instead of partial prefix
  
  Author: SGCMarkus  
  Date: Thu Jul 10 08:48:47 2025 +0300

- [712d4bd](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/712d4bd) gpt-utils: Add OTA support for FIH Nokia partitions
  
  Author: Tuan Anh  
  Date: Thu Jul 10 08:48:47 2025 +0300

- [69aa245](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/69aa245) gpt-utils: Add OTA support for Razer partitions
  
  Author: Michael Bestas  
  Date: Thu Jul 10 08:48:47 2025 +0300

- [85bad34](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/85bad34) gpt-utils: Add OTA support for Motorola partitions
  
  Author: Cosmin Tanislav  
  Date: Thu Jul 10 08:48:47 2025 +0300

- [d6a1505](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/d6a1505) gpt-utils: split PTN_SWAP_LIST across lines
  
  Author: Cosmin Tanislav  
  Date: Thu Jul 10 08:48:47 2025 +0300

- [3d89f3b](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/3d89f3b) gpt-utils: Make BSG/SG configurable
  
  Author: Michael Bestas  
  Date: Thu Jul 10 08:48:47 2025 +0300

- [f5b482a](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/f5b482a) gpt-utils: Add OTA support for pdp partition
  
  Author: dianlujitao  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [85b460b](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/85b460b) gpt-utils: Fix build errors
  
  Author: LuK1337  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [c1b214f](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/c1b214f) gpt-utils: Drop unnecessary include
  
  Author: LuK1337  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [eadabf9](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/eadabf9) gpt-utils: Drop unnecessary include
  
  Author: LuK1337  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [6074f2b](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/6074f2b) gpt-utils: Address the warnings
  
  Author: Tao Bao  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [9f5c812](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/9f5c812) gpt-utils: Use generated_kernel_headers
  
  Author: LuK1337  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [871afdd](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/871afdd) Import gpt-utils from LA.VENDOR.14.3.0.r1-19100-lanai.QSSI16.0
  
  Author: Alexander Koskovich  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [1740fc1](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/1740fc1) Partially revert: &quot;Stricter stat when checking for blockdevices&quot;
  
  Author: Cosmin Tanislav  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [d7c1af1](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/d7c1af1) Stricter stat when checking for blockdevices
  
  Author: Håkan Kvist  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [d16a2d4](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/d16a2d4) Remove goto statements
  
  Author: Håkan Kvist  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [8306131](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/8306131) Add function to get active boot slot
  
  Author: Tianjie  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [f258c56](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/f258c56) bootcontrol: count slots correctly
  
  Author: Connor O'Brien  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [4571299](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/4571299) [LSC] Add LOCAL_LICENSE_KINDS to hardware/qcom/bootctrl
  
  Author: Bob Badour  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [e8d1787](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/e8d1787) Add METADATA to bootctrl: BSD=NOTICE
  
  Author: Bob Badour  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [a3d9c8f](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/a3d9c8f) bootctrl: convert AIDL executables to defaults
  
  Author: dianlujitao  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [4ab0775](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/4ab0775) aidl: Use libboot_control_qti_defaults instead of shared lib
  
  Author: Mohd Faraz  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [37a6e59](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/37a6e59) bootctrl: Enabling bootctrl for gvmq beased on property
  
  Author: Tabassum Tabassum  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [fd32366](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/fd32366) Move mGvmqPlatform from header file to cpp
  
  Author: LuK1337  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [9a09e53](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/9a09e53) Expose 1.1/1.2 impls via cc_defaults
  
  Author: LuK1337  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [7ca588d](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/7ca588d) Build bootctrl.sdm845 using Android.bp
  
  Author: Hridya Valsaraju  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [01f24aa](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/01f24aa) Drop dependency on librecovery_updater
  
  Author: LuK1337  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [518da6d](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/518da6d) fuzzer: Correct bootctrl path
  
  Author: Michael Bestas  
  Date: Thu Jul 10 08:48:46 2025 +0300

- [59dab45](https://github.com/LineageOS/android_hardware_qcom_bootctrl/commit/59dab45) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Fri Jul 4 20:51:40 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8450/display</b></summary>

- [01b134f](https://github.com/LineageOS/android_hardware_qcom_display/commit/01b134f) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Fri Jul 11 17:15:38 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8550/display</b></summary>

- [f183f38](https://github.com/LineageOS/android_hardware_qcom_display/commit/f183f38) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Sat Jul 12 16:42:40 2025 +0300


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
<summary><b>hardware/qcom-caf/thermal</b></summary>

- [a30fbc2](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/a30fbc2) Merge tag &#x27;LA.VENDOR.1.0.r1-27600-WAIPIO.QSSI15.0&#x27; of https://git.codelinaro.org/clo/la/platform/hardware/qcom/thermal into lineage-23.0
  
  Author: Michael Bestas  
  Date: Sat Jul 5 11:05:17 2025 +0300

- [b650213](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/b650213) thermal-hal: Add more thermal throttling severities support for kailua
  
  Author: Michael Bestas  
  Date: Sat Jul 5 10:03:43 2025 +0300

- [8378c78](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/8378c78) Merge tag &#x27;LA.VENDOR.13.2.0.r1-26600-KAILUA.QSSI16.0&#x27; of https://git.codelinaro.org/clo/la/platform/hardware/qcom/thermal into lineage-23.0
  
  Author: Michael Bestas  
  Date: Sat Jul 5 09:58:54 2025 +0300

- [9803655](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/9803655) thermal-hal: Enable no trip set flag to not to set trip point 1 for lanai
  
  Author: Michael Bestas  
  Date: Sat Jul 5 09:37:19 2025 +0300

- [3664dd0](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/3664dd0) thermal-hal: Add more thermal throttling severities support for lanai
  
  Author: Michael Bestas  
  Date: Sat Jul 5 09:37:19 2025 +0300

- [4720b6a](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/4720b6a) Revert &quot;thermal-hal: Add namespace configuration for google specific path&quot;
  
  Author: Michael Bestas  
  Date: Sat Jul 5 09:37:19 2025 +0300

- [65957df](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/65957df) Merge tag &#x27;LA.VENDOR.14.3.0.r1-21600-lanai.QSSI15.0&#x27; of https://git.codelinaro.org/clo/la/platform/hardware/qcom/thermal into lineage-23.0
  
  Author: Michael Bestas  
  Date: Sat Jul 5 09:04:26 2025 +0300

- [a12a355](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/a12a355) thermal: Guard with soong namespace
  
  Author: Michael Bestas  
  Date: Sat Jul 5 08:23:14 2025 +0300

- [7dc802c](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/7dc802c) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Fri Jul 4 21:06:29 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/thermal-legacy-um</b></summary>

- [04aeca6](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/04aeca6) thermal-hal: Return failure only for uninitialized sensor request
  
  Author: Michael Bestas  
  Date: Sun Jul 6 23:45:02 2025 +0300

- [c1c837d](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/c1c837d) Revert &quot;thermal-hal: Add namespace configuration for google specific path&quot;
  
  Author: Michael Bestas  
  Date: Sun Jul 6 13:23:20 2025 +0300

- [e1d0034](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/e1d0034) Merge tag &#x27;LA.VENDOR.14.3.0.r1-21600-lanai.QSSI15.0&#x27; into staging/lineage-22.2_merge-LA.VENDOR.14.3.0.r1-21600-lanai.QSSI15.0
  
  Author: Michael Bestas  
  Date: Sun Jul 6 08:54:44 2025 +0300

- [9cfce74](https://github.com/LineageOS/android_hardware_qcom_thermal/commit/9cfce74) thermal: Guard with soong namespace
  
  Author: Michael Bestas  
  Date: Sat Jul 5 13:02:21 2025 +0000


</details>

<details>
<summary><b>hardware/qcom/wlan</b></summary>

- [640d7bc](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/640d7bc) wlan: Guard with soong namespace
  
  Author: Michael Bestas  
  Date: Sun Jul 6 12:55:40 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/wlan</b></summary>

- [8047b16](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/8047b16) WifiHal: Add lowi major version check for 11AZ
  
  Author: LuK1337  
  Date: Sat Jul 12 21:10:10 2025 +0200

- [6c45a9e](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/6c45a9e) wifihal: Disable support for Groupkeys
  
  Author: Vinay Gannevaram  
  Date: Sat Jul 5 17:10:40 2025 +0300

- [db2627a](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/db2627a) wifi: rename mode &#x27;ON&#x27; to &#x27;VOICE&#x27;.
  
  Author: Les Lee  
  Date: Sat Jul 5 17:10:40 2025 +0300

- [acc9beb](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/acc9beb) WifiHal: Implement wifi_set_voip_mode hal api
  
  Author: mukul sharma  
  Date: Sat Jul 5 17:10:40 2025 +0300

- [ea78c89](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/ea78c89) wpa_supplicant_lib: Allow -82dBm as non-SRG OBSS PD threshold
  
  Author: Madhvapathi Sriram  
  Date: Sat Jul 5 17:10:40 2025 +0300

- [9e609f3](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/9e609f3) wifihal: remove fatal keyword while sending alert event
  
  Author: mukul sharma  
  Date: Sat Jul 5 17:10:40 2025 +0300

- [f2bf4d5](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/f2bf4d5) wifiHal:Skip invalid channel when setting unsafe channels
  
  Author: Khanjan Desai  
  Date: Sat Jul 5 17:10:40 2025 +0300

- [451a64b](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/451a64b) wifi_hal: Fix KW issue
  
  Author: Baowei Liu  
  Date: Sat Jul 5 17:10:40 2025 +0300

- [0ae1e38](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/0ae1e38) wifi-hal: Only try LOWI once
  
  Author: Steve Kondik  
  Date: Sat Jul 5 17:10:40 2025 +0300

- [744defe](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/744defe) Wifi: Quiet some excessive debug output
  
  Author: Ethan Chen  
  Date: Sat Jul 5 17:10:40 2025 +0300

- [f17bd81](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/f17bd81) wifi-hal: stop the UMAC logspam
  
  Author: Altaf-Mahdi  
  Date: Sat Jul 5 17:10:40 2025 +0300

- [b767759](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/b767759) qcwcn: Address format compilation issues
  
  Author: Bruno Martins  
  Date: Sat Jul 5 17:10:40 2025 +0300

- [b262c03](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/b262c03) wpa_supplicant_8_lib: MAX_NUM_MLO_LINKS -&gt; MAX_NUM_MLD_LINKS
  
  Author: LuK1337  
  Date: Sat Jul 5 17:10:40 2025 +0300

- [60cbb50](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/60cbb50) wpa_supplicant_8_lib: Remove leftover Android.mk
  
  Author: Michael Bestas  
  Date: Sat Jul 5 17:10:40 2025 +0300

- [3d84819](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/3d84819) wlan: Guard with soong namespace
  
  Author: Michael Bestas  
  Date: Sat Jul 5 17:10:40 2025 +0300

- [85de2ff](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/85de2ff) wlan: Correct paths
  
  Author: Michael Bestas  
  Date: Sat Jul 5 17:10:40 2025 +0300

- [b94bc12](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/b94bc12) wlan-caf: Add guard makefile
  
  Author: Steve Kondik  
  Date: Sat Jul 5 11:41:31 2025 +0300

- [994d289](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/994d289) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Sat Jul 5 11:41:25 2025 +0300

- [3f2b575](https://github.com/LineageOS/android_hardware_qcom_wlan/commit/3f2b575) Merge c297af736b8b3e4f01d2729eb62a3ae282eca10a on remote branch
  
  Author: Linux Build Service Account  
  Date: Thu Jun 19 04:55:43 2025 -0700


</details>

<details>
<summary><b>hardware/st/nfc</b></summary>

- [e4b53d7](https://github.com/LineageOS/android_hardware_st_nfc/commit/e4b53d7) Add support for text FW configs
  
  Author: Cosmin Tanislav  
  Date: Sat Jul 12 18:39:35 2025 +0300


</details>

<details>
<summary><b>lineage-sdk</b></summary>

- [02c7df1](https://github.com/LineageOS/android_lineage-sdk/commit/02c7df1) sdk: Add GLOBAL_ACTION_KEY_STANDBY
  
  Author: LuK1337  
  Date: Tue Jun 24 20:51:36 2025 +0100

- [442a313](https://github.com/LineageOS/android_lineage-sdk/commit/442a313) sdk: Remove touch HIDL support
  
  Author: Bruno Martins  
  Date: Tue Jun 24 20:51:25 2025 +0100


</details>

<details>
<summary><b>packages/apps/Aperture</b></summary>

- [625df08](https://github.com/LineageOS/android_packages_apps_Aperture/commit/625df08) Aperture: Update gradle-generatebp to 1.25
  
  Author: Luca Stefani  
  Date: Sun Jul 6 10:47:36 2025 +0200

- [9bee4b4](https://github.com/LineageOS/android_packages_apps_Aperture/commit/9bee4b4) Aperture: Update Gradle wrapper and AGP
  
  Author: Luca Stefani  
  Date: Sun Jul 6 10:47:34 2025 +0200


</details>

<details>
<summary><b>packages/apps/Camelot</b></summary>

- [06312c6](https://github.com/LineageOS/android_packages_apps_Camelot/commit/06312c6) Camelot: Update gradle-generatebp to 1.25
  
  Author: Luca Stefani  
  Date: Sun Jul 6 11:07:01 2025 +0200

- [9232e88](https://github.com/LineageOS/android_packages_apps_Camelot/commit/9232e88) Camelot: Update Gradle wrapper and AGP
  
  Author: Luca Stefani  
  Date: Sun Jul 6 11:05:24 2025 +0200


</details>

<details>
<summary><b>packages/apps/Glimpse</b></summary>

- [5116f7f](https://github.com/LineageOS/android_packages_apps_Glimpse/commit/5116f7f) Glimpse: Update gradle-generatebp to 1.25
  
  Author: Luca Stefani  
  Date: Sun Jul 6 10:45:02 2025 +0200

- [caf360c](https://github.com/LineageOS/android_packages_apps_Glimpse/commit/caf360c) Glimpse: Update Gradle wrapper and AGP
  
  Author: Luca Stefani  
  Date: Sun Jul 6 10:44:59 2025 +0200


</details>

<details>
<summary><b>packages/apps/Twelve</b></summary>

- [10535cc](https://github.com/LineageOS/android_packages_apps_Twelve/commit/10535cc) Twelve: Update gradle-generatebp to 1.25
  
  Author: Luca Stefani  
  Date: Sun Jul 6 10:48:58 2025 +0200

- [94a5072](https://github.com/LineageOS/android_packages_apps_Twelve/commit/94a5072) Twelve: Update Gradle wrapper and AGP
  
  Author: Luca Stefani  
  Date: Sun Jul 6 10:40:35 2025 +0200

- [77df6b0](https://github.com/LineageOS/android_packages_apps_Twelve/commit/77df6b0) Twelve: Jellyfin: Use parent album thumbnail if available for items
  
  Author: Luca Stefani  
  Date: Tue Jul 1 13:55:17 2025 +0200

- [6bc2ad2](https://github.com/LineageOS/android_packages_apps_Twelve/commit/6bc2ad2) Twelve: Jellyfin: Request thumbnails with specific size
  
  Author: Luca Stefani  
  Date: Tue Jul 1 13:54:42 2025 +0200


</details>

<details>
<summary><b>prebuilts/extract-tools</b></summary>

- [f18d027](https://github.com/LineageOS/android_prebuilts_extract-tools/commit/f18d027) linux-x86: Remove no longer used tools
  
  Author: Michael Bestas  
  Date: Thu Jul 3 10:26:07 2025 +0300


</details>

<details>
<summary><b>tools/extract-utils</b></summary>

- [050cbd9](https://github.com/LineageOS/android_tools_extract-utils/commit/050cbd9) extract_utils: use null work-tree for getting the list of affected files
  
  Author: LuK1337  
  Date: Mon Jul 7 09:30:32 2025 +0000

- [c474cce](https://github.com/LineageOS/android_tools_extract-utils/commit/c474cce) extract_utils: use `apply` instead of `am`
  
  Author: LuK1337  
  Date: Sun Jul 6 12:50:33 2025 +0200

- [ab04367](https://github.com/LineageOS/android_tools_extract-utils/commit/ab04367) extract_utils: avoid passing non existent paths to git add
  
  Author: bengris32  
  Date: Sun Jul 6 12:50:30 2025 +0200

- [7ae70fa](https://github.com/LineageOS/android_tools_extract-utils/commit/7ae70fa) extract_utils: Consider path prefixes other than `smali/`
  
  Author: bengris32  
  Date: Sat Jul 5 17:14:26 2025 +0300

- [1186463](https://github.com/LineageOS/android_tools_extract-utils/commit/1186463) extract-utils: Apply relative path for apps with deep folder structures
  
  Author: Jyotiraditya Panda  
  Date: Sat Jul 5 17:14:26 2025 +0300

- [b2aa9c1](https://github.com/LineageOS/android_tools_extract-utils/commit/b2aa9c1) extract_utils: fix extraction of alternate partitions
  
  Author: Cosmin Tanislav  
  Date: Sat Jul 5 17:14:26 2025 +0300

- [6c57d7f](https://github.com/LineageOS/android_tools_extract-utils/commit/6c57d7f) extract_utils: make patching errors more descriptive
  
  Author: Cosmin Tanislav  
  Date: Sat Jul 5 17:14:26 2025 +0300

- [8356ba1](https://github.com/LineageOS/android_tools_extract-utils/commit/8356ba1) extract_utils: optimize patch application for big apps
  
  Author: Cosmin Tanislav  
  Date: Sat Jul 5 17:14:26 2025 +0300

- [c59d687](https://github.com/LineageOS/android_tools_extract-utils/commit/c59d687) extract_utils: Remove deprecated bash utils
  
  Author: Michael Bestas  
  Date: Sun Jun 29 21:38:23 2025 +0000

- [84f9c38](https://github.com/LineageOS/android_tools_extract-utils/commit/84f9c38) extract_utils: T 
  
  Author:  T -> Union[T, T]  
  Date: LuK1337|Sat Jun 28 12:15:28 2025 +0200


</details>

<details>
<summary><b>vendor/codeaurora/telephony</b></summary>

- [2718fce](https://github.com/LineageOS/android_vendor_codeaurora_telephony/commit/2718fce) IMS: Add Motorola specific API for VT
  
  Author: dianlujitao  
  Date: Fri Jul 4 14:53:45 2025 +0300

- [71060a4](https://github.com/LineageOS/android_vendor_codeaurora_telephony/commit/71060a4) ims-ext: Restore getLteDataUsage method for backward compatibility
  
  Author: Bruno Martins  
  Date: Fri Jul 4 14:53:45 2025 +0300

- [d4a7edd](https://github.com/LineageOS/android_vendor_codeaurora_telephony/commit/d4a7edd) Revert &quot;IMS: Remove API and constants related to ECT.&quot;
  
  Author: Josh Chasky  
  Date: Fri Jul 4 14:53:45 2025 +0300

- [f2f163e](https://github.com/LineageOS/android_vendor_codeaurora_telephony/commit/f2f163e) Add legacy {get,set}AutoReject methods for backwards compat
  
  Author: Paul Keith  
  Date: Fri Jul 4 14:53:45 2025 +0300

- [85562e5](https://github.com/LineageOS/android_vendor_codeaurora_telephony/commit/85562e5) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Fri Jul 4 14:53:45 2025 +0300


</details>

<details>
<summary><b>vendor/lineage</b></summary>

- [91f3650](https://github.com/LineageOS/android_vendor_lineage/commit/91f3650) release: Bump Security String to 2025-07-01
  
  Author: Michael Bestas  
  Date: Fri Jul 11 04:31:50 2025 +0000

- [f4fe770](https://github.com/LineageOS/android_vendor_lineage/commit/f4fe770) release: Update SVN from BP2A.250705.008
  
  Author: Michael Bestas  
  Date: Fri Jul 11 04:31:50 2025 +0000

- [54fe338](https://github.com/LineageOS/android_vendor_lineage/commit/54fe338) vars: July 2025 &quot;Security update&quot;
  
  Author: Michael Bestas  
  Date: Fri Jul 11 04:31:50 2025 +0000

- [2acacf2](https://github.com/LineageOS/android_vendor_lineage/commit/2acacf2) apns-conf: Remove deprecated Cosmote Romania entries
  
  Author: PixelThrived  
  Date: Mon Jul 7 12:54:27 2025 +0000

- [7d2705e](https://github.com/LineageOS/android_vendor_lineage/commit/7d2705e) merge_dtbs: allow one overlay to depend on multiple others
  
  Author: Cosmin Tanislav  
  Date: Mon Jul 7 11:30:05 2025 +0000

- [3e58b08](https://github.com/LineageOS/android_vendor_lineage/commit/3e58b08) vars: Update qcom tags for 16
  
  Author: Michael Bestas  
  Date: Sun Jul 6 09:38:53 2025 +0300

- [cbca3c1](https://github.com/LineageOS/android_vendor_lineage/commit/cbca3c1) vars: Update qcom tags
  
  Author: Michael Bestas  
  Date: Sun Jul 6 09:38:36 2025 +0300

- [00d9415](https://github.com/LineageOS/android_vendor_lineage/commit/00d9415) vars: Add sun tags
  
  Author: Bruno Martins  
  Date: Sun Jul 6 09:37:22 2025 +0300

- [74d4aec](https://github.com/LineageOS/android_vendor_lineage/commit/74d4aec) kernel: Automatically adapt path suffix for GKI modules
  
  Author: dianlujitao  
  Date: Sun Jul 6 00:39:44 2025 +0000

- [426b8a4](https://github.com/LineageOS/android_vendor_lineage/commit/426b8a4) repopick: Fix showing help when no arguments given the correct way
  
  Author: Julian Veit  
  Date: Sat Jul 5 12:10:29 2025 +0200

- [d67f867](https://github.com/LineageOS/android_vendor_lineage/commit/d67f867) config: Error out when using deprecated BoardConfig flags
  
  Author: Michael Bestas  
  Date: Thu Jul 3 06:23:45 2025 +0000

- [16b1b5f](https://github.com/LineageOS/android_vendor_lineage/commit/16b1b5f) repopick: Fix showing help when no arguments given
  
  Author: SpiritCroc  
  Date: Wed Jul 2 22:32:59 2025 +0000

- [281bef7](https://github.com/LineageOS/android_vendor_lineage/commit/281bef7) apn: Update China Telecom for MCC 460 MNC 11
  
  Author: Marc Bourgoin  
  Date: Tue Jul 1 16:58:33 2025 +0000

- [230d1dc](https://github.com/LineageOS/android_vendor_lineage/commit/230d1dc) repopick: Paginate queries properly
  
  Author: Michael W  
  Date: Fri Jun 27 15:07:55 2025 +0000

- [06f80d3](https://github.com/LineageOS/android_vendor_lineage/commit/06f80d3) vars: Add tegu
  
  Author: Michael Bestas  
  Date: Fri Jun 27 08:26:12 2025 +0100

- [f1746c2](https://github.com/LineageOS/android_vendor_lineage/commit/f1746c2) vars: Track aml tag for pixels
  
  Author: Michael Bestas  
  Date: Fri Jun 27 08:26:12 2025 +0100

- [c042dba](https://github.com/LineageOS/android_vendor_lineage/commit/c042dba) vars: Baklava
  
  Author: Chirayu Desai  
  Date: Fri Jun 27 08:26:12 2025 +0100

- [aa45b67](https://github.com/LineageOS/android_vendor_lineage/commit/aa45b67) config: Remove touch HIDL from FCM
  
  Author: Bruno Martins  
  Date: Fri Jun 27 08:26:12 2025 +0100

- [085fdef](https://github.com/LineageOS/android_vendor_lineage/commit/085fdef) config: RIP Trebuchet
  
  Author: Michael Bestas  
  Date: Fri Jun 27 08:26:12 2025 +0100

- [5daa4f3](https://github.com/LineageOS/android_vendor_lineage/commit/5daa4f3) release: Set RELEASE_GOOGLE_TEGU_16K_DEVELOPER_OPTION
  
  Author: Michael Bestas  
  Date: Fri Jun 27 08:26:12 2025 +0100

- [0c0598b](https://github.com/LineageOS/android_vendor_lineage/commit/0c0598b) release: Set RELEASE_SVN_TEGU
  
  Author: Michael Bestas  
  Date: Fri Jun 27 08:26:12 2025 +0100

- [8bc0272](https://github.com/LineageOS/android_vendor_lineage/commit/8bc0272) lineage: Bump aconfig flags extension to BP2A
  
  Author: basamaryan  
  Date: Fri Jun 27 08:26:12 2025 +0100

- [db0e020](https://github.com/LineageOS/android_vendor_lineage/commit/db0e020) LineageOS 23.0
  
  Author: basamaryan  
  Date: Fri Jun 27 08:26:12 2025 +0100

- [a8b4790](https://github.com/LineageOS/android_vendor_lineage/commit/a8b4790) envsetup.sh: Export LLVM_AOSP_PREBUILTS_VERSION with the current clang version from soong
  
  Author: micky387  
  Date: Thu Jun 26 22:04:16 2025 +0100


</details>

<details>
<summary><b>hardware/qcom-caf/sm8450/audio/agm</b></summary>

- [e4c2e7a](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/e4c2e7a) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Fri Jul 11 09:47:16 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8550/audio/agm</b></summary>

- [d896ee7](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/d896ee7) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Fri Jul 11 09:57:49 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8650/audio/agm</b></summary>

- [4fe6389](https://github.com/LineageOS/android_vendor_qcom_opensource_agm/commit/4fe6389) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Sun Jul 13 18:03:07 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8450/audio/pal</b></summary>

- [bbcc8b6](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/bbcc8b6) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Fri Jul 11 13:48:37 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8550/audio/pal</b></summary>

- [77eeed9](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/77eeed9) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Fri Jul 11 13:55:53 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8650/audio/pal</b></summary>

- [45d279b](https://github.com/LineageOS/android_vendor_qcom_opensource_arpal-lx/commit/45d279b) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Sun Jul 13 18:24:38 2025 +0300


</details>

<details>
<summary><b>vendor/qcom/opensource/commonsys/audio</b></summary>

- [736c328](https://github.com/LineageOS/android_vendor_qcom_opensource_audio/commit/736c328) audio: Remove unused policy_hal
  
  Author: Michael Bestas  
  Date: Tue Jul 8 03:54:11 2025 +0300

- [e5749d4](https://github.com/LineageOS/android_vendor_qcom_opensource_audio/commit/e5749d4) hal_adapter: add service executable
  
  Author: LuK1337  
  Date: Tue Jul 8 03:53:52 2025 +0300

- [626acf1](https://github.com/LineageOS/android_vendor_qcom_opensource_audio/commit/626acf1) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Fri Jul 4 15:17:43 2025 +0300


</details>

<details>
<summary><b>vendor/qcom/opensource/commonsys-intf/audio</b></summary>

- [dc11010](https://github.com/LineageOS/android_vendor_qcom_opensource_audio-commonsys-intf/commit/dc11010) audio: Remove unused Android.mk
  
  Author: Michael Bestas  
  Date: Thu Jul 10 07:01:54 2025 +0000

- [d975e99](https://github.com/LineageOS/android_vendor_qcom_opensource_audio-commonsys-intf/commit/d975e99) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Sun Jul 6 12:13:39 2025 +0300


</details>

<details>
<summary><b>vendor/qcom/opensource/audio-hal/st-hal</b></summary>

- [1a3f569](https://github.com/LineageOS/android_vendor_qcom_opensource_audio-hal_st-hal/commit/1a3f569) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Sat Jul 12 10:06:46 2025 +0300


</details>

<details>
<summary><b>vendor/qcom/opensource/audio-hal/st-hal-ar</b></summary>

- [32ea0ea](https://github.com/LineageOS/android_vendor_qcom_opensource_audio-hal_st-hal-ar/commit/32ea0ea) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Sat Jul 12 09:59:18 2025 +0300


</details>

<details>
<summary><b>vendor/qcom/opensource/audio-hal/st-hal-ar-legacy</b></summary>

- [a589d04](https://github.com/LineageOS/android_vendor_qcom_opensource_audio-hal_st-hal-ar/commit/a589d04) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Sat Jul 12 09:59:38 2025 +0300


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

- [c69f2f0](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/c69f2f0) Convert audio makefiles to blueprint
  
  Author: Arian  
  Date: Fri Jul 11 13:28:12 2025 +0300

- [0754e17](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/0754e17) Revert &quot;ar_osal: Revert the stub implementation of ar_osal_log_pkt to support RTGM&quot;
  
  Author: dianlujitao  
  Date: Fri Jul 11 13:27:46 2025 +0300

- [d2d42cf](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/d2d42cf) Disable usage of libdiag
  
  Author: anonymix007  
  Date: Fri Jul 11 13:27:46 2025 +0300


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

- [c69f2f0](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/c69f2f0) Convert audio makefiles to blueprint
  
  Author: Arian  
  Date: Fri Jul 11 13:28:12 2025 +0300

- [0754e17](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/0754e17) Revert &quot;ar_osal: Revert the stub implementation of ar_osal_log_pkt to support RTGM&quot;
  
  Author: dianlujitao  
  Date: Fri Jul 11 13:27:46 2025 +0300

- [d2d42cf](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/d2d42cf) Disable usage of libdiag
  
  Author: anonymix007  
  Date: Fri Jul 11 13:27:46 2025 +0300


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

- [c69f2f0](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/c69f2f0) Convert audio makefiles to blueprint
  
  Author: Arian  
  Date: Fri Jul 11 13:28:12 2025 +0300

- [0754e17](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/0754e17) Revert &quot;ar_osal: Revert the stub implementation of ar_osal_log_pkt to support RTGM&quot;
  
  Author: dianlujitao  
  Date: Fri Jul 11 13:27:46 2025 +0300

- [d2d42cf](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/d2d42cf) Disable usage of libdiag
  
  Author: anonymix007  
  Date: Fri Jul 11 13:27:46 2025 +0300


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

- [c69f2f0](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/c69f2f0) Convert audio makefiles to blueprint
  
  Author: Arian  
  Date: Fri Jul 11 13:28:12 2025 +0300

- [0754e17](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/0754e17) Revert &quot;ar_osal: Revert the stub implementation of ar_osal_log_pkt to support RTGM&quot;
  
  Author: dianlujitao  
  Date: Fri Jul 11 13:27:46 2025 +0300

- [d2d42cf](https://github.com/LineageOS/android_vendor_qcom_opensource_audioreach-graphservices/commit/d2d42cf) Disable usage of libdiag
  
  Author: anonymix007  
  Date: Fri Jul 11 13:27:46 2025 +0300


</details>

<details>
<summary><b>vendor/qcom/opensource/core-utils-vendor</b></summary>

- [ab23cec](https://github.com/LineageOS/android_vendor_qcom_opensource_core-utils-vendor/commit/ab23cec) qspaframework: Convert to blueprint
  
  Author: Michael Bestas  
  Date: Sat Jul 5 12:37:22 2025 +0300

- [d09ad36](https://github.com/LineageOS/android_vendor_qcom_opensource_core-utils-vendor/commit/d09ad36) fwd-detect: Create symlink target for CneApp
  
  Author: Bruno Martins  
  Date: Sat Jul 5 12:37:22 2025 +0300

- [f528a58](https://github.com/LineageOS/android_vendor_qcom_opensource_core-utils-vendor/commit/f528a58) Add .gitupstream file
  
  Author: Kevin F. Haggerty  
  Date: Sat Jul 5 12:37:22 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8450/data-ipa-cfg-mgr</b></summary>

- [b21c8fc](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/b21c8fc) ipacm: Address ipacm start failure
  
  Author: dianlujitao  
  Date: Sat Jul 12 20:54:48 2025 +0300

- [32b06eb](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/32b06eb) ipacm: Get rid of `using namespace std;`
  
  Author: Yumi Yukimura  
  Date: Sat Jul 12 20:54:48 2025 +0300

- [e4d8ea7](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/e4d8ea7) ipacm: Remove compilation dependency for in_addr_t on bionic
  
  Author: Praveen Kurapati  
  Date: Sat Jul 12 20:54:48 2025 +0300

- [816acf2](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/816acf2) data-ipa-cfg-mgr: Remove unused variables
  
  Author: Edwin Moquete  
  Date: Sat Jul 12 20:54:48 2025 +0300

- [14abafc](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/14abafc) ipanat: Remove test/Android.mk
  
  Author: Michael Bestas  
  Date: Sat Jul 12 20:54:45 2025 +0300

- [9c9149c](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/9c9149c) data-ipa-cfg-mgr: Disable all the debugging
  
  Author: Bruno Martins  
  Date: Sat Jul 12 20:54:37 2025 +0300

- [661ab6c](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/661ab6c) data-ipa-cfg-mgr: Remove verbose cflag
  
  Author: Luca Stefani  
  Date: Sat Jul 12 20:54:37 2025 +0300

- [f3798d6](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/f3798d6) hal:  FR59823: Remove references to libhwbinder &amp; libhidltransport
  
  Author: Sauvik Saha  
  Date: Sat Jul 12 20:54:37 2025 +0300

- [04c0085](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/04c0085) data-ipa-cfg-mgr: Remove deprecated clang property
  
  Author: basamaryan  
  Date: Sat Jul 12 20:54:37 2025 +0300

- [c88d8d6](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/c88d8d6) data-ipa-cfg-mgr: Define soong namespace
  
  Author: razorloves  
  Date: Sat Jul 12 20:54:37 2025 +0300

- [58b2209](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/58b2209) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Sat Jul 12 20:54:37 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8550/data-ipa-cfg-mgr</b></summary>

- [472b516](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/472b516) ipacm: Address ipacm start failure
  
  Author: dianlujitao  
  Date: Sat Jul 12 20:51:43 2025 +0300

- [fbf54a1](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/fbf54a1) ipacm: Get rid of `using namespace std;`
  
  Author: Yumi Yukimura  
  Date: Sat Jul 12 20:51:43 2025 +0300

- [33a1eb7](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/33a1eb7) ipacm: Remove compilation dependency for in_addr_t on bionic
  
  Author: Praveen Kurapati  
  Date: Sat Jul 12 20:51:43 2025 +0300

- [dc0156c](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/dc0156c) data-ipa-cfg-mgr: Disable all the debugging
  
  Author: Bruno Martins  
  Date: Sat Jul 12 20:51:42 2025 +0300

- [97afce4](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/97afce4) data-ipa-cfg-mgr: Remove verbose cflag
  
  Author: Luca Stefani  
  Date: Sat Jul 12 20:51:42 2025 +0300

- [d5d4e79](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/d5d4e79) hal:  FR59823: Remove references to libhwbinder &amp; libhidltransport
  
  Author: Sauvik Saha  
  Date: Sat Jul 12 20:51:42 2025 +0300

- [1cacf78](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/1cacf78) data-ipa-cfg-mgr: Remove deprecated clang property
  
  Author: basamaryan  
  Date: Sat Jul 12 20:51:42 2025 +0300

- [d0dcb45](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/d0dcb45) data-ipa-cfg-mgr: Import hardware/qcom-caf/sm8550 namespace
  
  Author: Michael Bestas  
  Date: Sat Jul 12 20:51:42 2025 +0300

- [5cd1faa](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/5cd1faa) data-ipa-cfg-mgr: Define soong namespace
  
  Author: razorloves  
  Date: Sat Jul 12 20:48:31 2025 +0300

- [7e170cc](https://github.com/LineageOS/android_vendor_qcom_opensource_data-ipa-cfg-mgr/commit/7e170cc) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Sat Jul 12 20:48:31 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8650/data-ipa-cfg-mgr</b></summary>

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
<summary><b>hardware/qcom-caf/sm8550/dataipa</b></summary>

- [b58a0a0](https://github.com/LineageOS/android_vendor_qcom_opensource_dataipa/commit/b58a0a0) dataipa: Disable all the debugging
  
  Author: Bruno Martins  
  Date: Sun Jul 13 00:19:27 2025 +0300

- [5080ee9](https://github.com/LineageOS/android_vendor_qcom_opensource_dataipa/commit/5080ee9) dataipa: libipanat: Ignore all errors
  
  Author: Bruno Martins  
  Date: Sun Jul 13 00:19:10 2025 +0300

- [69816d2](https://github.com/LineageOS/android_vendor_qcom_opensource_dataipa/commit/69816d2) dataipa: Disable kernel modules and tests
  
  Author: Michael Bestas  
  Date: Sat Jul 12 20:43:25 2025 +0300

- [cc0af4c](https://github.com/LineageOS/android_vendor_qcom_opensource_dataipa/commit/cc0af4c) dataipa: Remove clang usage from make files
  
  Author: Pavan Kumar M  
  Date: Sat Jul 12 20:42:45 2025 +0300

- [999aa02](https://github.com/LineageOS/android_vendor_qcom_opensource_dataipa/commit/999aa02) Add .gitupstream file
  
  Author: Michael Bestas  
  Date: Sat Jul 12 20:40:46 2025 +0300


</details>

<details>
<summary><b>hardware/qcom-caf/sm8650/dataipa</b></summary>

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
<summary><b>vendor/qcom/opensource/commonsys/display</b></summary>

- [4740d3d](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys/commit/4740d3d) commonsys: services: Delete device_obj_ to release the memory
  
  Author: Vinoth Jayaram  
  Date: Fri Jul 4 20:44:14 2025 +0300

- [a7343d4](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys/commit/a7343d4) DisplayConfig: Initialize service intf before registering service
  
  Author: Baldev Sahu  
  Date: Fri Jul 4 20:44:14 2025 +0300

- [f745420](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys/commit/f745420) displayConfig: Add size validation for client input parameter
  
  Author: Boreddy Mahidhar  
  Date: Fri Jul 4 20:44:13 2025 +0300

- [f8e65fc](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys/commit/f8e65fc) displayConfig: Add size validation for client input parameters
  
  Author: Boreddy Mahidhar  
  Date: Fri Jul 4 20:44:13 2025 +0300

- [34fa0bc](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys/commit/34fa0bc) displayconfig: Restrict the scope of death_service_mutex_
  
  Author: Vikas batchu  
  Date: Fri Jul 4 20:44:13 2025 +0300

- [3a0b5a2](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys/commit/3a0b5a2) display: Import display commonsys interfaces namespace
  
  Author: Michael Bestas  
  Date: Fri Jul 4 20:44:13 2025 +0300

- [eb67157](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys/commit/eb67157) display-commonsys: Define a soong namespace
  
  Author: Alessandro Astone  
  Date: Fri Jul 4 20:44:13 2025 +0300

- [6099588](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys/commit/6099588) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Fri Jul 4 20:44:13 2025 +0300


</details>

<details>
<summary><b>vendor/qcom/opensource/commonsys-intf/display</b></summary>

- [8452e92](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys-intf/commit/8452e92) Partially revert gralloc struct changes
  
  Author: Alessandro Astone  
  Date: Fri Jul 4 15:13:46 2025 +0300

- [7ff8d23](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys-intf/commit/7ff8d23) gralloc: Add plane layout component type blob
  
  Author: Tharaga Balachandran  
  Date: Fri Jul 4 15:12:55 2025 +0300

- [e5225b8](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys-intf/commit/e5225b8) display-commonsys-intf: Define a soong namespace
  
  Author: Alessandro Astone  
  Date: Fri Jul 4 15:12:55 2025 +0300

- [b6ff9fe](https://github.com/LineageOS/android_vendor_qcom_opensource_display-commonsys-intf/commit/b6ff9fe) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Fri Jul 4 15:12:55 2025 +0300


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
<summary><b>vendor/qcom/opensource/commonsys/fm</b></summary>

- [640159f](https://github.com/LineageOS/android_vendor_qcom_opensource_fm-commonsys/commit/640159f) Merge tag &#x27;LA.QSSI.16.0.r1-07300-qssi.0&#x27; of https://git.codelinaro.org/clo/la/platform/vendor/qcom-opensource/fm-commonsys into lineage-23.0
  
  Author: Michael Bestas  
  Date: Fri Jul 4 15:11:29 2025 +0300

- [4ef5df0](https://github.com/LineageOS/android_vendor_qcom_opensource_fm-commonsys/commit/4ef5df0) Revert &quot;jni: Remove btconfigstore remnants and make it build&quot;
  
  Author: Michael Bestas  
  Date: Fri Jul 4 15:10:27 2025 +0300


</details>

<details>
<summary><b>vendor/qcom/opensource/healthd-ext</b></summary>

- [841c7f5](https://github.com/LineageOS/android_vendor_qcom_opensource_healthd-ext/commit/841c7f5) healthd-ext: update data type for members of array ucsiPSYName
  
  Author: Jishnu Prakash  
  Date: Sat Jul 5 12:44:17 2025 +0300

- [7dbf8ee](https://github.com/LineageOS/android_vendor_qcom_opensource_healthd-ext/commit/7dbf8ee) healthd-ext: update ucsi power supply list for second USB port
  
  Author: Jishnu Prakash  
  Date: Sat Jul 5 12:44:17 2025 +0300

- [126a741](https://github.com/LineageOS/android_vendor_qcom_opensource_healthd-ext/commit/126a741) Add .gitupstream file
  
  Author: Kevin F. Haggerty  
  Date: Sat Jul 5 12:44:17 2025 +0300


</details>

<details>
<summary><b>vendor/qcom/opensource/interfaces</b></summary>

- [c29cd1d](https://github.com/LineageOS/android_vendor_qcom_opensource_interfaces/commit/c29cd1d) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Fri Jul 4 20:47:03 2025 +0300


</details>

<details>
<summary><b>vendor/qcom/opensource/power</b></summary>

- [95f4c72](https://github.com/LineageOS/android_vendor_qcom_opensource_power/commit/95f4c72) Merge tag &#x27;LA.VENDOR.15.4.0.r1-17900-pakala.0&#x27; of https://git.codelinaro.org/clo/la/platform/vendor/qcom-opensource/power into HEAD
  
  Author: Bruno Martins  
  Date: Fri Jul 4 02:23:05 2025 +0100

- [f757b78](https://github.com/LineageOS/android_vendor_qcom_opensource_power/commit/f757b78) power: Support MODE_EXT and SET_INTERACTIVE_EXT as external modules
  
  Author: Bruno Martins  
  Date: Fri Jul 4 01:38:11 2025 +0100


</details>

<details>
<summary><b>vendor/qcom/opensource/usb</b></summary>

- [015e083](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/015e083) init.qcom.usb.rc: Set NCM interface name
  
  Author: Yumi Yukimura  
  Date: Sat Jul 5 14:59:46 2025 +0300

- [9dcac7a](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/9dcac7a) usb: Add interface specifiers to USB/USB gadget services
  
  Author: Luca Stefani  
  Date: Sat Jul 5 14:59:42 2025 +0300

- [aa5b14f](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/aa5b14f) usb: Use DFP/UFP mode for non-power role source/sink
  
  Author: Vivekachooz  
  Date: Sat Jul 5 14:59:36 2025 +0300

- [48e7652](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/48e7652) usb: Set permissions for common USB toggle paths
  
  Author: LuK1337  
  Date: Sat Jul 5 14:59:25 2025 +0300

- [a7e6f26](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/a7e6f26) hal: Make it build with -Werror
  
  Author: Michael Bestas  
  Date: Sat Jul 5 14:59:19 2025 +0300

- [f418e81](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/f418e81) usb: Add support for SEC specific enableUsbData path
  
  Author: LuK1337  
  Date: Sat Jul 5 14:53:21 2025 +0300

- [54d0189](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/54d0189) usb: Fall back to old enableUsbData paths
  
  Author: Michael Bestas  
  Date: Sat Jul 5 14:46:37 2025 +0300

- [5a959e0](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/5a959e0) USBGadgetHAL: Set vid, pid for basic functions if exist in usb_compositions.conf
  
  Author: Luofan Chen  
  Date: Sat Jul 5 14:38:43 2025 +0300

- [ebbd6d0](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/ebbd6d0) USBGadgetHAL: Add support for UVC function
  
  Author: Yumi Yukimura  
  Date: Sat Jul 5 14:38:42 2025 +0300

- [762f846](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/762f846) init.qcom.usb.rc: Add support for DeviceAsWebcam feature
  
  Author: Yumi Yukimura  
  Date: Sat Jul 5 14:38:42 2025 +0300

- [7bff0e5](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/7bff0e5) USB: Advertise as sink when audio accessory is connected
  
  Author: Adithya R  
  Date: Sat Jul 5 14:38:42 2025 +0300

- [a881dbe](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/a881dbe) USB: Use SW path for QDSS over USB
  
  Author: Ke Du  
  Date: Sat Jul 5 14:30:24 2025 +0300

- [d01a876](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/d01a876) trinket: usb use bam2bam hw path
  
  Author: Ke Du  
  Date: Sat Jul 5 14:29:38 2025 +0300

- [27f88fc](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/27f88fc) init.qcom.usb.rc: Add 60fps support for uvc resolutions
  
  Author: Akash Kumar  
  Date: Sat Jul 5 14:28:50 2025 +0300

- [266c245](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/266c245) init.qcom.usb.rc: Extend UVC resolutions
  
  Author: Akash Kumar  
  Date: Sat Jul 5 14:28:41 2025 +0300

- [4fea73c](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/4fea73c) usb: Set ro property to determine usb parent node
  
  Author: Akash Kumar  
  Date: Sat Jul 5 14:28:35 2025 +0300

- [c5d926a](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/c5d926a) usb: Enable USB configurations for trinket
  
  Author: Ke Du  
  Date: Sat Jul 5 14:28:27 2025 +0300

- [5d39092](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/5d39092) USB: Enable USBGadget HAL for Crow
  
  Author: Uttkarsh Aggarwal  
  Date: Sat Jul 5 14:27:19 2025 +0300

- [a14af20](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/a14af20) USB: Use SW path for QDSS over USB
  
  Author: Uttkarsh Aggarwal  
  Date: Sat Jul 5 14:26:54 2025 +0300

- [7b78b47](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/7b78b47) init.qcom.usb.rc: Extend UVC resolutions
  
  Author: AKASH KUMAR  
  Date: Sat Jul 5 14:24:47 2025 +0300

- [f312d89](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/f312d89) init.qcom.usb.rc: set uac sync support for capture
  
  Author: AKASH KUMAR  
  Date: Sat Jul 5 14:22:33 2025 +0300

- [f6c6a78](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/f6c6a78) usb: Enable USB configurations for kona
  
  Author: Santhosh Kumar Marikukala  
  Date: Sat Jul 5 14:22:26 2025 +0300

- [f43ea38](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/f43ea38) usb: Set ro property to determine usb parent node
  
  Author: AKASH KUMAR  
  Date: Sat Jul 5 14:21:40 2025 +0300

- [55fb4dd](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/55fb4dd) init.qcom.usb.rc: Add support for UAC1 related compositions
  
  Author: AKASH KUMAR  
  Date: Sat Jul 5 14:20:37 2025 +0300

- [e5163e5](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/e5163e5) init.qcom.usb.sh: do not set vendor.usb.rndis.func.name on Anorak
  
  Author: Linyu Yuan  
  Date: Sat Jul 5 14:20:30 2025 +0300

- [e166174](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/e166174) usb: Enable USB configurations for bengal
  
  Author: Himanshu Agrawal  
  Date: Sat Jul 5 14:20:23 2025 +0300

- [6873fb5](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/6873fb5) USB: Enable USB Gadget HAL for Anorak
  
  Author: Uttkarsh Aggarwal  
  Date: Sat Jul 5 14:19:16 2025 +0300

- [f7f4a08](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/f7f4a08) init.qcom.usb.rc: Add support for diag_cnss comp for non IPA targets
  
  Author: Krishna Kurapati  
  Date: Sat Jul 5 14:18:30 2025 +0300

- [7551a7f](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/7551a7f) USB: Use SW path for QDSS over USB
  
  Author: Prashanth K  
  Date: Sat Jul 5 14:18:12 2025 +0300

- [f32b83a](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/f32b83a) USB: Enable USBGadget HAL for Neo
  
  Author: Krishna Kurapati  
  Date: Sat Jul 5 14:17:36 2025 +0300

- [4c587de](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/4c587de) USB: Use USB QDSS data over SW path on Neo
  
  Author: Krishna Kurapati  
  Date: Sat Jul 5 14:16:43 2025 +0300

- [9d91a15](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/9d91a15) USB: Configure Diag MDM instance on 90D9
  
  Author: Harsh Agarwal  
  Date: Sat Jul 5 14:15:06 2025 +0300

- [d012f26](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/d012f26) usb: Set the USB model to something more device specific
  
  Author: Alexander Koskovich  
  Date: Sat Jul 5 14:15:03 2025 +0300

- [bf927ea](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/bf927ea) init.qcom.usb.rc: Don&#x27;t apply persist.vendor.usb.config
  
  Author: dianlujitao  
  Date: Sat Jul 5 14:14:55 2025 +0300

- [871d058](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/871d058) usb: Add USB Soong namespace to product makefile.
  
  Author: Alexander Koskovich  
  Date: Sat Jul 5 14:14:43 2025 +0300

- [bbeadb9](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/bbeadb9) Add soong namespace for init scripts
  
  Author: Michael Bestas  
  Date: Sat Jul 5 14:14:36 2025 +0300

- [6820e12](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/6820e12) Merge tag &#x27;LA.VENDOR.14.3.0.r1-21600-lanai.QSSI15.0&#x27; of https://git.codelinaro.org/clo/la/platform/vendor/qcom-opensource/usb into lineage-23.0
  
  Author: Michael Bestas  
  Date: Sat Jul 5 13:24:48 2025 +0300

- [328c0f0](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/328c0f0) USB: Correct Indentation Styles
  
  Author: Rajashekar kuruva  
  Date: Sat Jul 5 13:15:45 2025 +0300

- [9193410](https://github.com/LineageOS/android_vendor_qcom_opensource_usb/commit/9193410) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Sat Jul 5 13:11:03 2025 +0300


</details>

<details>
<summary><b>vendor/qcom/opensource/vibrator</b></summary>

- [0bbb1f0](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/0bbb1f0) vibrator: automatically detect supported effects
  
  Author: Cosmin Tanislav  
  Date: Thu Jul 10 10:57:37 2025 +0300

- [3a4e3af](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/3a4e3af) vibrator: Hook USE_EFFECT_STREAM up
  
  Author: Arian  
  Date: Thu Jul 10 10:57:37 2025 +0300

- [8693456](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/8693456) vibrator: add effect header library
  
  Author: Cosmin Tanislav  
  Date: Thu Jul 10 10:57:37 2025 +0300

- [3d9a917](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/3d9a917) vibrator: Remove HapticsPolicy.xml prebuilt_etc package
  
  Author: Michael Bestas  
  Date: Thu Jul 10 10:57:36 2025 +0300

- [653b4a4](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/653b4a4) vibrator: effect: fix -Wreorder-init-list
  
  Author: Cosmin Tanislav  
  Date: Thu Jul 10 10:37:21 2025 +0300

- [7598dbd](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/7598dbd) vibrator: Fix misleading indentation
  
  Author: Michael Bestas  
  Date: Thu Jul 10 10:27:49 2025 +0300

- [e95b4d7](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/e95b4d7) vibrator: Add support for drv2624:haptics
  
  Author: Richard Raya  
  Date: Thu Jul 10 10:27:49 2025 +0300

- [4a66464](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/4a66464) vibrator: Add support for awinic_haptic input device
  
  Author: TheStrechh  
  Date: Thu Jul 10 10:27:49 2025 +0300

- [b568990](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/b568990) vibrator: Add support for aw8695_haptic input device
  
  Author: Michael Bestas  
  Date: Thu Jul 10 10:27:49 2025 +0300

- [e9f678b](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/e9f678b) vibrator: Add support for aw8697_haptic input device
  
  Author: Arian  
  Date: Thu Jul 10 10:27:49 2025 +0300

- [de41ff8](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/de41ff8) vibrator: Add support for aw8624_haptic input device
  
  Author: Arian  
  Date: Thu Jul 10 10:27:49 2025 +0300

- [2bbb6bb](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/2bbb6bb) vibrator: Use a better check for primitive effects
  
  Author: Adithya R  
  Date: Sat Jul 5 15:37:34 2025 +0300

- [6ae8473](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/6ae8473) vibrator: Don&#x27;t support compose effects if primitive_duration node does not exist
  
  Author: Arian  
  Date: Sat Jul 5 15:36:37 2025 +0300

- [4df0bcb](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/4df0bcb) vibrator: bail out in setAmplitude if gain control is not supported
  
  Author: Fenglin Wu  
  Date: Sat Jul 5 15:35:13 2025 +0300

- [33c6e18](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/33c6e18) Vibrator: Fix check for no of bytes in Co-proc SSR monitor thread
  
  Author: Umang Chheda  
  Date: Sat Jul 5 15:33:49 2025 +0300

- [1e39d59](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/1e39d59) Vibrator: free memory when offload pattern failed
  
  Author: Hui Liu  
  Date: Sat Jul 5 15:32:46 2025 +0300

- [5d64fb3](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/5d64fb3) Vibrator: Remove CAP_PERFORM_CALLBACK Flag for Vibrator
  
  Author: Ashish Chavan  
  Date: Sat Jul 5 15:32:44 2025 +0300

- [3daeb61](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/3daeb61) aidl: Simplify soc check and drop prop dep
  
  Author: Pig  
  Date: Sat Jul 5 15:31:17 2025 +0300

- [061ee89](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/061ee89) Vibrator: add support for waipio 4G variant
  
  Author: Jishnu Prakash  
  Date: Sat Jul 5 15:27:05 2025 +0300

- [9cc84ac](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/9cc84ac) Vibrator: add support for cape
  
  Author: Jishnu Prakash  
  Date: Sat Jul 5 15:26:33 2025 +0300

- [34f2447](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/34f2447) vibrator: restore external control for old chipsets
  
  Author: Michael Bestas  
  Date: Sat Jul 5 15:24:38 2025 +0300

- [b6fdc1f](https://github.com/LineageOS/android_vendor_qcom_opensource_vibrator/commit/b6fdc1f) Add .gitupstream file
  
  Author: Chirayu Desai  
  Date: Sat Jul 5 15:23:21 2025 +0300


</details>

<details>
<summary><b>lineage/hudson</b></summary>

- [b1432a5](https://github.com/LineageOS/hudson/commit/b1432a5) The Porsche Cayman are mid-engine two-seater sports cars manufactured and marketed by German automobile manufacturer Porsche
  
  Author: Andrey Sprynga  
  Date: Mon Jul 14 22:32:56 2025 +0700

- [bdc1867](https://github.com/LineageOS/hudson/commit/bdc1867) Nuwa mends the sky
  
  Author: SkyMinus  
  Date: Sun Jul 13 02:37:30 2025 +0000

- [facb972](https://github.com/LineageOS/hudson/commit/facb972) making miracles happen
  
  Author: Han Sol Jin  
  Date: Fri Jul 11 06:58:29 2025 -0700

- [034ffcd](https://github.com/LineageOS/hudson/commit/034ffcd) One spicy pillow later, we&#x27;re so back
  
  Author: Sebastiano Barezzi  
  Date: Thu Jul 3 04:29:30 2025 +0200

- [7e1d754](https://github.com/LineageOS/hudson/commit/7e1d754) Nubia (/ˈnjuːbiə/) is a region along the Nile river encompassing the area between the confluence of the Blue and White Niles.
  
  Author: Andrey Sprynga  
  Date: Mon Jun 30 18:10:12 2025 +0700

- [adc69f9](https://github.com/LineageOS/hudson/commit/adc69f9) The &lt;style&gt; HTML element contains style information for a document.
  
  Author: Andrey Sprynga  
  Date: Sat Jun 28 01:45:13 2025 +0700

- [662a799](https://github.com/LineageOS/hudson/commit/662a799) hudson: Revive rosemary
  
  Author: Matsvei Niaverau  
  Date: Thu Jun 26 10:52:36 2025 +0200

- [5317ff9](https://github.com/LineageOS/hudson/commit/5317ff9) fuxi devised the eight trigrams
  
  Author: lolipuru  
  Date: Tue Jun 24 17:50:46 2025 +0000

- [9a38a59](https://github.com/LineageOS/hudson/commit/9a38a59) hudson: Revive socrates
  
  Author: WenHao2130  
  Date: Tue Jun 24 19:01:48 2025 +0800

- [ad8bf17](https://github.com/LineageOS/hudson/commit/ad8bf17) hudson: Ship Galaxy Tab S7 (Wi-Fi)
  
  Author: Bruno Martins  
  Date: Mon Jun 23 20:30:40 2025 +0000


</details>

<details>
<summary><b>lineage/wiki</b></summary>

- [2191852](https://github.com/LineageOS/lineage_wiki/commit/2191852) wiki: devices: Add LG Velvet (caymanslm)
  
  Author: Andrey Sprynga  
  Date: Tue Jul 15 05:00:41 2025 +0000

- [fd4120b](https://github.com/LineageOS/lineage_wiki/commit/fd4120b) wiki: Add Xiaomi 13 Pro (nuwa)
  
  Author: SkyMinus  
  Date: Sat Jul 12 16:01:01 2025 +0800

- [f7ded40](https://github.com/LineageOS/lineage_wiki/commit/f7ded40) Promote gtowifi to 22
  
  Author: Han Sol Jin  
  Date: Fri Jul 11 06:58:06 2025 -0700

- [4a5ada0](https://github.com/LineageOS/lineage_wiki/commit/4a5ada0) wiki: Add peripherals sorting script
  
  Author: LuK1337  
  Date: Fri Jul 4 09:58:38 2025 +0200

- [ebdd875](https://github.com/LineageOS/lineage_wiki/commit/ebdd875) wiki: hudson_sync: Remove unused import
  
  Author: LuK1337  
  Date: Fri Jul 4 09:57:29 2025 +0200

- [967f824](https://github.com/LineageOS/lineage_wiki/commit/967f824) wiki: Sort peripherals according to schema
  
  Author: LuK1337  
  Date: Fri Jul 4 09:57:14 2025 +0200

- [83a6e20](https://github.com/LineageOS/lineage_wiki/commit/83a6e20) wiki: marble: Add 3.5mm jack peripheral
  
  Author: LuK1337  
  Date: Fri Jul 4 09:47:24 2025 +0200

- [3133a82](https://github.com/LineageOS/lineage_wiki/commit/3133a82) wiki: vayu: Change kernel repository
  
  Author: Sebastiano Barezzi  
  Date: Fri Jul 4 01:12:19 2025 +0200

- [bc2a42e](https://github.com/LineageOS/lineage_wiki/commit/bc2a42e) wiki: Resume support for vayu
  
  Author: Sebastiano Barezzi  
  Date: Thu Jul 3 10:54:33 2025 +0000

- [a99dc6b](https://github.com/LineageOS/lineage_wiki/commit/a99dc6b) wiki: Move setup build environment to seperate template
  
  Author: Inhishonor  
  Date: Wed Jul 2 16:32:45 2025 +0000

- [c9305e5](https://github.com/LineageOS/lineage_wiki/commit/c9305e5) wiki: Improve navbar with new links
  
  Author: Inhishonor  
  Date: Tue Jul 1 14:46:57 2025 -0700

- [e7c6d79](https://github.com/LineageOS/lineage_wiki/commit/e7c6d79) contributing_to_apps: Mention that _some_ apps use gradle-generatebp
  
  Author: Luca Stefani  
  Date: Tue Jul 1 17:59:26 2025 +0200

- [048d022](https://github.com/LineageOS/lineage_wiki/commit/048d022) contributing_to_apps: Add DeskClock
  
  Author: Luca Stefani  
  Date: Tue Jul 1 17:59:26 2025 +0200

- [7e06c05](https://github.com/LineageOS/lineage_wiki/commit/7e06c05) contributing_to_apps: Sort apps
  
  Author: Luca Stefani  
  Date: Tue Jul 1 17:59:26 2025 +0200

- [aea131c](https://github.com/LineageOS/lineage_wiki/commit/aea131c) wiki: devices: Revive Nubia SDM845
  
  Author: Andrey Sprynga  
  Date: Mon Jun 30 17:57:52 2025 +0700

- [ea356a3](https://github.com/LineageOS/lineage_wiki/commit/ea356a3) wiki: devices: Add LG Style3 (L-41A)
  
  Author: Andrey Sprynga  
  Date: Mon Jun 30 05:32:32 2025 +0000

- [71a566e](https://github.com/LineageOS/lineage_wiki/commit/71a566e) wiki: Improve libvirt-qemu page
  
  Author: Inhishonor  
  Date: Sat Jun 28 17:22:26 2025 +0000

- [6c403a9](https://github.com/LineageOS/lineage_wiki/commit/6c403a9) wiki: Fix boot_stack_dd partition path missing
  
  Author: razorloves  
  Date: Fri Jun 27 15:09:16 2025 +0000

- [3b26346](https://github.com/LineageOS/lineage_wiki/commit/3b26346) wiki: Make shark use boot_stack instead of its own instructions
  
  Author: Michael W  
  Date: Fri Jun 27 07:06:46 2025 +0000

- [56683bb](https://github.com/LineageOS/lineage_wiki/commit/56683bb) wiki: Provide a hint regarding fastboot and absolute paths
  
  Author: Michael W  
  Date: Fri Jun 27 07:06:46 2025 +0000

- [4c2ce5f](https://github.com/LineageOS/lineage_wiki/commit/4c2ce5f) wiki: devices: Revive rosemary
  
  Author: Matsvei Niaverau  
  Date: Thu Jun 26 10:56:04 2025 +0200

- [b191459](https://github.com/LineageOS/lineage_wiki/commit/b191459) wiki: devices: add xiaomi 13 (fuxi)
  
  Author: lolipuru  
  Date: Tue Jun 24 16:30:25 2025 +0000

- [ab39d70](https://github.com/LineageOS/lineage_wiki/commit/ab39d70) wiki: devices: Revive socrates
  
  Author: WenHao2130  
  Date: Tue Jun 24 11:13:15 2025 +0800

- [e1a8bd2](https://github.com/LineageOS/lineage_wiki/commit/e1a8bd2) devices: Add Galaxy Tab S7 (Wi-Fi)
  
  Author: Bruno Martins  
  Date: Mon Jun 23 20:30:56 2025 +0000

- [3904ae6](https://github.com/LineageOS/lineage_wiki/commit/3904ae6) devices: Label Nokia devices shipping firmware
  
  Author: Tuan Anh  
  Date: Fri Jun 20 09:14:21 2025 +0700

- [4e2adbc](https://github.com/LineageOS/lineage_wiki/commit/4e2adbc) wiki: &quot;website and/or software&quot; -&gt; &quot;online services&quot;
  
  Author: LuK1337  
  Date: Thu Jun 19 19:55:10 2025 +0200


</details>

<details>
<summary><b>lineage/mirror</b></summary>

- [477c6dd](https://github.com/LineageOS/mirror/commit/477c6dd) Updated to 11-Jul-2025 22:01 UTC
  
  Author: Tim Schumacher  
  Date: Sat Jul 12 00:01:27 2025 +0200

- [a8b9372](https://github.com/LineageOS/mirror/commit/a8b9372) Updated to 07-Jul-2025 10:01 UTC
  
  Author: Tim Schumacher  
  Date: Mon Jul 7 12:01:26 2025 +0200

- [1272486](https://github.com/LineageOS/mirror/commit/1272486) Updated lineage-minimal to 06-Jul-2025 10:01 UTC
  
  Author: Tim Schumacher  
  Date: Sun Jul 6 12:01:43 2025 +0200

- [98bb897](https://github.com/LineageOS/mirror/commit/98bb897) Updated to 05-Jul-2025 22:01 UTC
  
  Author: Tim Schumacher  
  Date: Sun Jul 6 00:01:15 2025 +0200

- [dd1dd8a](https://github.com/LineageOS/mirror/commit/dd1dd8a) Updated to 27-Jun-2025 22:01 UTC
  
  Author: Tim Schumacher  
  Date: Sat Jun 28 00:01:28 2025 +0200

- [6076f02](https://github.com/LineageOS/mirror/commit/6076f02) Updated lineage-minimal to 27-Jun-2025 10:01 UTC
  
  Author: Tim Schumacher  
  Date: Fri Jun 27 12:01:58 2025 +0200

- [7d5a8af](https://github.com/LineageOS/mirror/commit/7d5a8af) Updated to 24-Jun-2025 00:08 UTC
  
  Author: Tim Schumacher  
  Date: Tue Jun 24 02:08:03 2025 +0200


</details>

<details>
<summary><b>lineage/scripts</b></summary>

- [bc80ce8](https://github.com/LineageOS/scripts/commit/bc80ce8) build-webview: Update default webview to 138.0.7204.63
  
  Author: Kevin F. Haggerty  
  Date: Sun Jul 6 07:15:58 2025 -0600

- [b55311a](https://github.com/LineageOS/scripts/commit/b55311a) add-repo: Support adding remotes
  
  Author: LuK1337  
  Date: Thu Jul 3 15:58:47 2025 +0200

- [ae6c17a](https://github.com/LineageOS/scripts/commit/ae6c17a) lineage-priv-template: Add Android 16 keys
  
  Author: LuK1337  
  Date: Mon Jun 30 18:01:52 2025 +0000

- [89cc270](https://github.com/LineageOS/scripts/commit/89cc270) add-repo: Steal indent() from roomservice
  
  Author: LuK1337  
  Date: Sat Jun 28 10:13:10 2025 +0000

- [ca0b4b9](https://github.com/LineageOS/scripts/commit/ca0b4b9) lineage-priv-template: Skip dirs ending in .apk
  
  Author: LuK1337  
  Date: Sun Jun 22 22:22:17 2025 +0200


</details>

<details>
<summary><b>lineage/website</b></summary>

- [c9995a2](https://github.com/LineageOS/www/commit/c9995a2) www: Update mastodon SVG icon
  
  Author: LuK1337  
  Date: Fri Jul 18 22:43:18 2025 +0200


</details>

---

_Auto-generated by GitHub Actions. Displays recent LineageOS source commit activity for development reference._
