set_file_tag() {
    file=$1
    tag=$(echo $@|  awk '{$1="";print $0}')
    tmp_file='/tmp/plist_tmp'
    cat << EOF > ${tmp_file}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<array>
</array>
</plist>
EOF
    for tag_text in ${tag};do
        tag_xml="<string>${tag_text}</string>"
            sed -i '' "5 i\\
$tag_xml
" ${tmp_file}
    done
    tag_plist=$(cat ${tmp_file})
    xattr -wx com.apple.FinderInfo "0000000000000000000000000000000000000000000000000000000000000000" "${file}"
    xattr -w com.apple.metadata:_kMDItemUserTags "${tag_plist}" "${file}"
    rm -f tmp_file

}

#传入第一个参数为文件路径，后续参数为标签
set_file_tag $@