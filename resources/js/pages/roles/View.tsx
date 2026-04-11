import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useTranslation } from 'react-i18next';
import { Shield } from 'lucide-react';
import { usePage } from '@inertiajs/react';

interface ViewProps {
    role: any;
}

export default function View({ role }: ViewProps) {
    const { t } = useTranslation();
    const { permissions } = usePage().props as any;

    // Group role permissions by module
    const groupPermissionsByModule = () => {
        if (!role.permissions || !permissions) return {};
        
        const grouped = {};
        
        // Create a map of permission names to permission objects
        const permissionMap = {};
        Object.entries(permissions).forEach(([module, modulePermissions]: [string, any[]]) => {
            modulePermissions.forEach(permission => {
                permissionMap[permission.name] = { ...permission, module };
            });
        });
        
        // Group role permissions by module
        role.permissions.forEach(rolePermission => {
            const permissionName = rolePermission.name || rolePermission;
            const permissionData = permissionMap[permissionName];
            
            if (permissionData) {
                const module = permissionData.module;
                if (!grouped[module]) {
                    grouped[module] = [];
                }
                grouped[module].push(permissionData);
            }
        });
        
        return grouped;
    };

    const groupedPermissions = groupPermissionsByModule();
    const totalPermissions = role.permissions?.length || 0;

    return (
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader className="pb-4 border-b">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <DialogTitle className="text-xl font-semibold">{t('Role Details')}</DialogTitle>
                    </div>
                </div>
            </DialogHeader>

            <div className="overflow-y-auto flex-1 p-4 space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t('Role Name')}</label>
                    <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{role.label}</p>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t('Description')}</label>
                    <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{role.description || '-'}</p>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t('Permissions')} ({totalPermissions})</label>
                    <div className="bg-gray-50 p-3 rounded max-h-96 overflow-y-auto">
                        {Object.keys(groupedPermissions).length > 0 ? (
                            <div className="space-y-4">
                                {Object.entries(groupedPermissions).map(([module, modulePermissions]: [string, any[]]) => (
                                    <div key={module} className="border rounded shadow-sm bg-white">
                                        {/* Module Header */}
                                        <div className="flex items-center justify-between p-3 bg-gray-100 border-b">
                                            <h4 className="font-medium text-gray-900">{module}</h4>
                                            <div className="text-xs text-gray-600">
                                                {modulePermissions.length} {t("permissions")}
                                            </div>
                                        </div>
                                        
                                        {/* Module Permissions */}
                                        <div className="p-3">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                                {modulePermissions.map((permission, index) => (
                                                    <div 
                                                        key={index} 
                                                        className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200"
                                                    >
                                                        {permission.label}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <span className="text-sm text-gray-500">{t('No permissions assigned')}</span>
                        )}
                    </div>
                </div>
            </div>
        </DialogContent>
    );
}